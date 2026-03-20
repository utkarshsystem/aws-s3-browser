const fetchTocDetails = async (subscriberCode, code, url) => {
  const res = await fetch(
    `${url}/course_toc_details/${subscriberCode}/${code}`
  );
  return res;
};

const fetchTocDetailsByCourseCode = async (subscriberCode, courseCode, url) => {
  const res = await fetch(
    `${url}/course_toc_details/${subscriberCode}/course_code/${courseCode}`
  );
  return res;
};

const getPageData = async (subscriberCode, code, url) => {
  const res = await fetch(`${url}/pages/${subscriberCode}/${code}`);
  return res;
};
const getAllMongodbCourses = async (url) => {
  const res = await fetch(`${url}/courses`);
  return res;
};
const getMongodbCourses = async (url, subscriberCode) => {
  const res = await fetch(`${url}/courses/${subscriberCode}`);
  return res;
};

const getCoursePdfDetails = async (subscriberCode, code, url) => {
  const res = await fetch(
    `${url}/course_pdf_details/${subscriberCode}/${code}`
  );
  return res;
};

// mariadb course_info crud
const fetchAllCourses = async (url) => {
  const res = await fetch(`${url}/courses/md`);
  return res;
};
const getSubscriberCourses = async (subscriberCode, url) => {
  const res = await fetch(`${url}/courses/md/${subscriberCode}`);
  return res;
};

const updateCourse = async (data, url) => {
  const res = await fetch(`${url}/courses/md`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res;
};

const createCourse = async (data, url) => {
  const res = await fetch(`${url}/courses/md`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  return res;
};

const deleteCourse = async (course_code, url) => {
  const res = await fetch(`${url}/courses/md/${course_code}`, {
    method: "DELETE",
  });
  return res;
};

const getSubscribersMappedWithCourse = async (url, courseCode) => {
  const res = await fetch(`${url}/courses/md/mapped_subscribers/${courseCode}`);
  return res;
};

const updateSubscribersMappedWithCourse = async (data, url) => {
  const res = await fetch(`${url}/courses/md/mapped_subscribers`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res;
};

const updateCourseOffersDetails = async (data, url) => {
  const res = await fetch(`${url}/courses/md/course_offers`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res;
};

// mariadb course groups

const getSubscirberCourseGroups = async (
  subscriberCode,
  url,
  is_pdf_menu,
  sort_by
) => {
  let finalUrl = `${url}/course_groups/md/${subscriberCode}?`;
  if (is_pdf_menu) {
    finalUrl += "is_pdf_menu=1";
  }
  if (sort_by) {
    finalUrl += `&sort_by=${sort_by}`;
  }
  console.log(finalUrl);
  const res = await fetch(finalUrl);
  return res;
};

const createCourseGroup = async (data, url) => {
  const res = await fetch(`${url}/course_groups/md`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  return res;
};

const updateCourseGroup = async (data, url) => {
  const res = await fetch(`${url}/course_groups/md`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res;
};

const deleteCourseGroup = async (data, url) => {
  const res = await fetch(`${url}/course_groups/md`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
    body: JSON.stringify(data),
  });
  return res;
};

const getSubscribersMappedWithCourseGroup = async (url, courseGroupCode) => {
  const res = await fetch(`${url}/course_groups/md/map/${courseGroupCode}`);
  return res;
};

const updateMappedSubscriberWithCourseGroup = async (data, url) => {
  const res = await fetch(`${url}/course_groups/md/map`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res;
};

const getFlyerData = async (subscriberCode, url) => {
  const res = await fetch(`${url}/course_groups/flyer/${subscriberCode}`);
  return res;
};

// bookmark
const getAllBookmarksApi = async (url) => {
  const res = await fetch(`${url}/bookmarks`);
  return res;
};

export {
  getSubscribersMappedWithCourse,
  getMongodbCourses,
  getAllMongodbCourses,
  getSubscirberCourseGroups,
  updateCourseGroup,
  getSubscribersMappedWithCourseGroup,
  updateMappedSubscriberWithCourseGroup,
  deleteCourseGroup,
  getSubscriberCourses,
  createCourseGroup,
  getFlyerData,
  fetchTocDetails,
  getPageData,
  fetchTocDetailsByCourseCode,
  fetchAllCourses,
  updateCourse,
  deleteCourse,
  createCourse,
  updateSubscribersMappedWithCourse,
  updateCourseOffersDetails,
  getCoursePdfDetails,
  getAllBookmarksApi,
};
