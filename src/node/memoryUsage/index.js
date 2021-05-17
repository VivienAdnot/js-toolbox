const logMemoryWithContext = step => {
  try {
    const used = process.memoryUsage();

    // eslint-disable-next-line guard-for-in
    for (let key in used) {
      const memUsageMB = Math.round((used[key] / 1024 / 1024) * 100) / 100;
      console.log(
        { memUsage: memUsageMB, step },
        `Mem ${step}: ${key} ${memUsageMB} MB`
      );
    }
  } catch (error) {
    console.log("BOOOOM", error);
  }
};

logMemoryWithContext("foo");
