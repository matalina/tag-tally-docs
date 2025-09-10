    export default () => {
      const now = new Date();
      const buildTime = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      return {
        buildDate: buildTime,
      };
    };