import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { keywords } from "../../data/keywords.js";

/**
 * Creates the resolution engine data for rolling dice and getting results.
 * @param {import("alpinejs").Alpine} Alpine The alpine instance.
 */
export default function (Alpine) {
  Alpine.data("resolutionEngine", () => ({
    question: "",
    level: 5,
    resolutionType: "oracle",
    oracleLikelihood: "50/50",
    result: null,
    copied: false,

    get showOracleOptions() {
      return this.resolutionType === "oracle";
    },

    get displayType() {
      if (this.resolutionType === "basic") {
        return "Task";
      }
      if (this.resolutionType === "attack") {
        return "Attack";
      }
      if (this.resolutionType === "defense") {
        return "Defense";
      }
      // Map other types to their display names
      const typeMap = {
        "oracle": "Oracle",
        "spellcasting": "Spellcasting",
        "npc-interactions": "NPC Interactions",
        "debt-collectors": "Debt Collectors",
        "harvesting": "Harvesting",
        "crafting": "Crafting",
        "augmentation": "Augmentation",
        "salvaging": "Salvaging",
        "navigation": "Navigation",
        "secrets": "Secrets",
      };
      return typeMap[this.resolutionType] || this.resolutionType;
    },

    roll() {
      try {
        const roll = new DiceRoll("1d20");
        const rollValue = roll.total;
        // Oracle always uses level 5, but we still show the selected level in output
        const dc = this.resolutionType === "oracle" ? 15 : this.level * 3;
        const resultText = this.getResultText(rollValue, dc);
        const specialDetails = this.getSpecialDetails(resultText, rollValue, dc);
        const resultKeywords = this.getKeywords(resultText, specialDetails);

        const displayLevel = this.resolutionType === "oracle" ? 5 : this.level;
        
        this.result = {
          roll: rollValue,
          dc: dc,
          level: displayLevel,
          result: resultText,
          specialDetails: specialDetails,
          keywords: resultKeywords,
          formatted: this.formatResult(rollValue, dc, displayLevel, resultText, specialDetails, resultKeywords),
        };
        
        // Clear the question input after rolling
        this.question = "";
      } catch (error) {
        console.error("Error rolling dice:", error);
        alert("Error rolling dice: " + error.message);
      }
    },


    getResultText(rollValue, dc) {
      if (this.resolutionType === "oracle") {
        return this.getOracleResult(rollValue);
      }

      // Standard resolution logic
      if (rollValue === 1) {
        return "Fail, and";
      }
      if (rollValue >= 2 && rollValue <= dc - 6) {
        return "Fail, but";
      }
      if (rollValue >= dc - 5 && rollValue <= dc - 1) {
        return "Success, but";
      }
      if (rollValue >= dc && rollValue <= dc + 4) {
        return "Success";
      }
      if (rollValue >= dc + 5) {
        return "Success, and";
      }
      return "Success";
    },

    getOracleResult(rollValue) {
      const likelihood = this.oracleLikelihood;
      if (likelihood === "less") {
        // Less likely - higher DC ranges
        if (rollValue === 1) return "No, and";
        if (rollValue >= 2 && rollValue <= 12) return "No, but";
        if (rollValue >= 13 && rollValue <= 17) return "Yes, but";
        if (rollValue >= 18 && rollValue <= 20) return "Yes";
        return "Yes, and";
      } else if (likelihood === "more") {
        // More likely - lower DC ranges
        if (rollValue === 1) return "No, and";
        if (rollValue >= 2 && rollValue <= 6) return "No, but";
        if (rollValue >= 7 && rollValue <= 16) return "Yes, but";
        if (rollValue >= 12 && rollValue <= 17) return "Yes";
        if (rollValue >= 18) return "Yes, and";
        return "Yes";
      } else {
        // 50/50 - standard ranges
        if (rollValue === 1) return "No, and";
        if (rollValue >= 2 && rollValue <= 9) return "No, but";
        if (rollValue >= 10 && rollValue <= 14) return "Yes, but";
        if (rollValue >= 15 && rollValue <= 19) return "Yes";
        if (rollValue === 20) return "Yes, and";
        return "Yes";
      }
    },

    getSpecialDetails(resultText, rollValue, dc) {
      const type = this.resolutionType;

      // Attack (Momentum only)
      if (type === "attack") {
        return this.getAttackDetails(resultText);
      }

      // Defense (Momentum and Doom)
      if (type === "defense") {
        return this.getDefenseDetails(resultText);
      }

      // Spellcasting
      if (type === "spellcasting") {
        return this.getSpellcastingDetails(resultText);
      }

      // NPC Interactions
      if (type === "npc-interactions") {
        return this.getNPCInteractionsDetails(resultText);
      }

      // Debt Collectors
      if (type === "debt-collectors") {
        return this.getDebtCollectorsDetails(resultText);
      }

      // Harvesting
      if (type === "harvesting") {
        return this.getHarvestingDetails(resultText);
      }

      // Crafting
      if (type === "crafting") {
        return this.getCraftingDetails(resultText);
      }

      // Augmentation
      if (type === "augmentation") {
        return this.getAugmentationDetails(resultText);
      }

      // Salvaging
      if (type === "salvaging") {
        return this.getSalvagingDetails(resultText);
      }

      // Navigation
      if (type === "navigation") {
        return this.getNavigationDetails(resultText);
      }

      // Secrets
      if (type === "secrets") {
        return this.getSecretsDetails(resultText);
      }

      return null;
    },

    getAttackDetails(resultText) {
      // Attack shows Momentum only
      if (resultText === "Fail, and" || resultText === "Fail, but" || resultText === "Success, but") {
        return "0 momentum";
      }
      if (resultText === "Success") {
        return "+1 momentum";
      }
      if (resultText === "Success, and") {
        return "+2 momentum";
      }
      return "0 momentum";
    },

    getDefenseDetails(resultText) {
      // Defense shows Momentum and Doom
      if (resultText === "Fail, and") {
        return "-2 momentum/+2 doom";
      }
      if (resultText === "Fail, but") {
        return "-1 momentum/+1 doom";
      }
      if (resultText === "Success, but") {
        return "-1 momentum/+0 doom";
      }
      return "0 momentum";
    },

    getSpellcastingDetails(resultText) {
      const details = {
        "Fail, and": "Fail, and Roll on the Mishap table",
        "Fail, but": "The spell fails, but nothing backfires or goes wrong",
        "Success, but": "Success, but it backfires and hinders all rolls until the end of your next turn",
        "Success": "The spell goes off exactly as you expected",
        "Success, and": "Successfully cast the spell and earn the tag of Mastery for that spell.",
      };
      return details[resultText] || null;
    },

    getNPCInteractionsDetails(resultText) {
      const details = {
        "Fail, and": "Fail, decrease the NPCs default disposition by one step",
        "Fail, but": "Fail, but their attitude changes towards you in your favor",
        "Success, but": "Success, but their attitude changes against your favor",
        "Success": "Success",
        "Success, and": "Success, increase the NPCs default disposition by one step",
      };
      return details[resultText] || null;
    },

    getDebtCollectorsDetails(resultText) {
      const details = {
        "Fail, and": "Collectors come knocking and they come looking for blood (Combat encounter)",
        "Fail, but": "Collectors come knocking but are understanding",
        "Success, but": "Collectors offer an alternative payment method -- do this for me, and I'll let you off (Negotiations)",
        "Success": "--",
        "Success, and": "Collectors are feeling generous. Instead of hindered by two wealth check, hinder your check at the end of the session by 1 to see if you clear your debt.",
      };
      return details[resultText] || null;
    },

    getHarvestingDetails(resultText) {
      const details = {
        "Fail, and": "You failed to harvest the item and destroyed the resource",
        "Fail, but": "You failed to harvest the item but the node is intact",
        "Success, but": "Successfully harvested the item but the item level is lowered by one",
        "Success": "Successfully harvested the item of equal level to the source",
        "Success, and": "Successfully harvested the item and the level is raised by one",
      };
      return details[resultText] || null;
    },

    getCraftingDetails(resultText) {
      const details = {
        "Fail, and": "You failed to craft the item and you lose the materials",
        "Fail, but": "You failed to craft the item but you didn't lose any materials in the process",
        "Success, but": "Successfully crafted the item but it doesn't do exactly what you wanted",
        "Success": "Successfully crafted the item and it does what you intended",
        "Success, and": "Successfully crafted the item better than expected",
      };
      return details[resultText] || null;
    },

    getAugmentationDetails(resultText) {
      const details = {
        "Fail, and": "You failed to augment the item and you lose the raw material.",
        "Fail, but": "You failed to augment the item but you didn't lose any materials in the process",
        "Success, but": "Successfully augmented the item but it doesn't do exactly what you wanted",
        "Success": "Successfully augmented the item and it does what you intended",
        "Success, and": "Successfully augmented the item better than expected",
      };
      return details[resultText] || null;
    },

    getSalvagingDetails(resultText) {
      const details = {
        "Fail, and": "You failed to salvage the item and destroyed it",
        "Fail, but": "You failed to salvage the item but it was not damaged",
        "Success, but": "Successfully salvaged the item but the property is dimished",
        "Success": "Successfully salvaged the item with the intended property",
        "Success, and": "Successfully salvaged the item with two properties",
      };
      return details[resultText] || null;
    },

    getNavigationDetails(resultText) {
      const details = {
        "Fail, and": "You failed to navigate, and you are completely lost",
        "Fail, but": "You failed to navigate, but you've found a clue to point you in the right direction",
        "Success, but": "You successfully navigate, but you aren't sure you are going in the right direction",
        "Success": "You successfully navigate",
        "Success, and": "You successfully navigate and find proof you are heading in the right direction",
      };
      return details[resultText] || null;
    },

    getSecretsDetails(resultText) {
      const details = {
        "Fail, and": "You find find and trigger a trap.",
        "Fail, but": "You find a trap, but it is not triggered",
        "Success, but": "You find a secret but its trapped",
        "Success": "You found a secret",
        "Success, and": "You found 2 secrets",
      };
      return details[resultText] || null;
    },

    getKeywords(resultText, specialDetails) {
      // Only return keywords if there are no special details and result contains "and" or "but"
      if (specialDetails) {
        return null;
      }

      const lowerResult = resultText.toLowerCase();
      if (lowerResult.includes("and") || lowerResult.includes("but")) {
        // Randomly select 3 keywords
        const selected = [];
        const available = [...keywords];
        for (let i = 0; i < 3 && available.length > 0; i++) {
          const randomIndex = Math.floor(Math.random() * available.length);
          selected.push(available[randomIndex]);
          available.splice(randomIndex, 1);
        }
        return selected;
      }
      return null;
    },

    formatResult(rollValue, dc, level, resultText, specialDetails, resultKeywords) {
      const typeLabel = this.displayType;
      const question = this.question || "";

      let output = `${typeLabel}: ${question}\n`;
      output += `${resultText} [${level}(${dc}) → ${rollValue}]`;

      if (specialDetails && specialDetails !== "--") {
        output += `\n${specialDetails}`;
      } else if (resultKeywords && resultKeywords.length > 0) {
        output += `\n${resultKeywords.join(", ")}`;
      }

      return output;
    },

    async copyResult() {
      if (!this.result) return;

      try {
        await navigator.clipboard.writeText(this.result.formatted);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 1500);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    },
  }));
}

