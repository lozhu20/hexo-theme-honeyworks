hexo.extend.generator.register("categories", function(locals) {
  return {
      path: "categories/",
      layout: ["categories"],
      data: Object.assign({}, locals, {
          __tags: true
      })
  };
});

hexo.extend.generator.register("tags", function(locals) {
  return {
      path: "tags/",
      layout: ["tags"],
      data: Object.assign({}, locals, {
          __tags: true
      })
  };
});

hexo.extend.generator.register("reading", function(locals) {
  return {
      path: "reading/",
      layout: ["reading"],
      data: Object.assign({}, locals, {
          __tags: true
      })
  };
});

hexo.extend.generator.register("schedule", function(locals) {
  return {
      path: "schedule/",
      layout: ["schedule"],
      data: Object.assign({}, locals, {
          __tags: true
      })
  };
});

hexo.extend.generator.register("links", function(locals) {
  return {
      path: "links/",
      layout: ["links"],
      data: Object.assign({}, locals, {
          __tags: true
      })
  };
});

// hexo.extend.generator.register("about", function(locals) {
//   return {
//       path: "about/",
//       layout: ["about"],
//       data: Object.assign({}, locals, {
//           __tags: true
//       })
//   };
// });

hexo.extend.helper.register("getCopyright", function (startDateConfig, author) {
  if (!startDateConfig) {
    return;
  }
  let startYear = new Date(startDateConfig).getFullYear();
  let currentYear = new Date().getFullYear();

  if (startYear === currentYear) {
    return "Copyright ©️" + startYear + " " + author;
  } else {
    return "Copyright ©️" + Math.min(startYear, currentYear) + "-" + Math.max(startYear, currentYear) + " " + author;
  }
});
