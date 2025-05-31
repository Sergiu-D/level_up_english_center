export default function getFilteredPaths(menuItems, keyword) {
  const result = [];

  menuItems.forEach((item) => {
    // Check if the item has the `subLinks` key
    if (item.subLinks && Array.isArray(item.subLinks)) {
      // Filter the subLinks where the `path` contains the dynamic keyword
      const filteredSubLinks = item.subLinks.filter((subLink) =>
        subLink.path.includes(keyword)
      );

      // Extract the last part of each filtered path (e.g., "ket" from "/cursuri/cambridge/ket")
      const filteredPaths = filteredSubLinks.map((subLink) => {
        const pathParts = subLink.path.split("/");
        return pathParts[pathParts.length - 1]; // Take the last element of the split path
      });

      // Add the filtered paths to the result array
      result.push(...filteredPaths);
    }
  });

  return result;
}
