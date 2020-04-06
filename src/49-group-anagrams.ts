/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs: Array<string>) {
  const orderedStringMap = new Map();
  strs.forEach(str => {
    const orderedString = str.split("").sort().join();
    console.log(str, orderedString);
    if (!orderedStringMap.has(orderedString)) {
      orderedStringMap.set(orderedString, [str]);
    } else {
      orderedStringMap.get(orderedString).push(str);
    }
  });

  return Array.from(orderedStringMap.values());

};

it("test", function() {
  console.log(groupAnagrams([""]), [[""]]);

  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
    ["ate", "eat", "tea"],
    ["nat", "tan"],
    ["bat"]
  ]);

  console.log(groupAnagrams(["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"]), [
    ["doc"], ["bar"], ["buy"], ["ill"], ["may"], ["tin"], ["cab"], ["pew"], ["max"], ["duh"]
  ]);
});