export const getDepartmentIds = () => {
  return [1, 3, 23, 3, 98, 6, 5, 1, 3, 5, 5, 23];
};

export const fetchDepartments = ids => {
  const departments = {
    1: "Support",
    7: "Tech",
    98: "Finance",
    6: "HR",
    3: "Business",
    5: "Sales"
  };

  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve(
        ids.map(id =>
          departments[id] ? { id: id, name: departments[id] } : null
        )
      );
    }, Math.random() * 2000);
  });
};
