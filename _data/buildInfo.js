    export default () => {
      const now = new Date();
      const buildTime = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const year = now.getFullYear();
      if (year !== 2025) {
        year = `2025 - ${year}`;
      }

      return {
        buildDate: buildTime,
        year,
      };
    };