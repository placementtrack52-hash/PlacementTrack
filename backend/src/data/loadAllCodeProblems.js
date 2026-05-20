let cachedProblems = null

export const loadAllCodeProblems = async () => {
  if (cachedProblems) return cachedProblems

  const modules = await Promise.all([
    import('../seedArrayBatch1.js'),
    import('../seedArrayBatch2.js'),
    import('../seedArrayBatch3.js'),
    import('../seedBackTracking.js'),
    import('../seedBinaryTrees.js'),
    import('../seedBitManipulation.js'),
    import('../seedBST.js'),
    import('../seedCodeProblems.js'),
    import('../seedDP.js'),
    import('../seedGraph.js'),
    import('../seedGreedy.js'),
    import('../seedHeap.js'),
    import('../seedLinkedList.js'),
    import('../seedMathematics.js'),
    import('../seedMatrix.js'),
    import('../seedSearchingSorting.js'),
    import('../seedStacksQueues.js'),
    import('../seedStrings.js'),
    import('../seedTrie.js'),
  ])

  cachedProblems = modules.flatMap((module) => module.problems || [])
  return cachedProblems
}
