function rmHtmlTags(str) {
  if (typeof str !== "string") {
    throw new Error("Error: parameter type is not a String");
  } else str = str.toString();
  return str.replace(/(<([^>]+)>)/g, "");
}

try {
  console.log(rmHtmlTags("<p><strong><em>Content</em></strong></p>"));
} catch (err) {
  console.log(err.message);
}
  