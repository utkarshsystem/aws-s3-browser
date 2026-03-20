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
