import {variables} from "@/messages/variables"

export function applyVariablesToJson(json) {
  // Handle different types: object, array, and string
  if (typeof json === "string") {
    return applyVariables(json, variables);
  }

  if (Array.isArray(json)) {
    // If it's an array, map over each element recursively
    return json.map((item) => applyVariablesToJson(item, variables));
  }

  if (typeof json === "object" && json !== null) {
    // If it's an object, recursively apply variables to each key-value pair
    const result = {};
    for (const key in json) {
      result[key] = applyVariablesToJson(json[key], variables);
    }
    return result;
  }

  // For any other type (like numbers, booleans), return as-is
  return json;
}

function applyVariables(template, variables) {
  return template.replace(/{{\s*([^{}\s]+)\s*}}/g, (match, key) => {
    return variables[key] || match;
  });
}