"use client";
// @ts-nocheck
import React, { useEffect, useState, useCallback } from "react";
// import localData from './data'
import "./style.css";
import { getCoursePdfDetails } from "../../services/elearning";
const leftmenuCodes = {
  RES_IN: "raisein-left-tree-explorer",
  VIL: "vil-left-tree-explorer",
  ACSL: "acslres-left-tree-explorer",
  TA: "tacad-left-tree-explorer",
  "opportunities-explorer": "oppexp-leftmenu",
};
interface PdfExplorerDashboardProps {
  elearningUrl: string;
  role: string;
  subscriberCode: string;
  dashboardOnlyFlag: boolean;
  dashboardCode: string;
}
const PdfExplorerDashboard = ({
  elearningUrl,
  role,
  subscriberCode,
  dashboardOnlyFlag,
  dashboardCode,
}: PdfExplorerDashboardProps) => {
  const [sideMenu, setSideMenu] = useState<any[]>([]);
  const [topMenu, setTopMenu] = useState<any[]>([]);
  const [filteredTopMenu, setFilteredTopMenu] = useState<any[]>([]);
  const [selectedTopMenu, setSelectedTopMenu] = useState<any | null>(null);
  const [menu, setMenu] = useState<any[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<any | null>(null);
  const [dashboardData, setDashboardData] = useState<any[]>([]);
  const [filteredDashboardData, setFilteredDashboardData] = useState<any[]>([]);
  const [primaryColor, setPrimaryColor] = useState<string>("#F39317");
  const [secondaryColor, setSecondaryColor] = useState<string>("#54A601");
  const [headingColor, setHeadingColor] = useState<string>("#000");
  const [pdfBucketName, setPdfBucketName] = useState<string | null>(null);

  useEffect(() => {
    if (sideMenu && sideMenu.length > 0 && sideMenu[0]) {
      if (sideMenu[0].color1) setPrimaryColor(sideMenu[0].color1);
      if (sideMenu[0].color2) setSecondaryColor(sideMenu[0].color2);
      if (sideMenu[0].color3) setHeadingColor(sideMenu[0].color3);
      if (sideMenu[0].content_url) fetchTopMenuData(sideMenu[0].content_url);
    }
  }, [sideMenu]);

  useEffect(() => {
    if (!menu) return;
    fetchDashboardData(menu[0]?.content_url);
    if (!menu || menu.length === 0) return;
    setSelectedMenu(menu[0]);
  }, [menu]);

  const onClickTopMenu = (tab) => {
    setSelectedTopMenu(tab);
    setMenu(tab.content.tabs);
  };

  const fetchTopMenuData = async (url) => {
    if (!url) return;
    let res = await fetch(elearningUrl + url);
    let json = await res.json();
    setTopMenu(json?.data);
  };

  const fetchDashboardData = async (url) => {
    let res = await fetch(elearningUrl + url);
    let json = await res.json();
    if (json && json.data) {
      setDashboardData(json.data);
      setPdfBucketName(json.bucket_name || null);
    } else {
      setDashboardData([]);
      setPdfBucketName(null);
    }
  };

  const handleLinkClick = async (link) => {
    if (!pdfBucketName) {
      window.open(link, "_blank");
      return;
    }

    let res = await fetch(`${elearningUrl}/pdf_explorer/get_pdf_url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bucketName: pdfBucketName,
        key: link,
      }),
    });

    if (res.ok) {
      const json = await res.json();
      window.open(json.url, "_blank");
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const res = await getCoursePdfDetails(
        subscriberCode,
        leftmenuCodes[subscriberCode],
        elearningUrl
      );

      let json = await res.json();
      if (role !== "admin") {
        let d = json.data.filter((e) => {
          return e.is_public === true;
        });
        setSideMenu(d);
      } else {
        setSideMenu(json.data);
      }
    } catch (e) {}
  }, [subscriberCode, elearningUrl]);

  useEffect(() => {
    if (!dashboardOnlyFlag) {
      fetchData();
    } else {
      fetchDashboardData(
        elearningUrl + `/course_pdf_details/${subscriberCode}/${dashboardCode}`
      );
    }
  }, [fetchData, dashboardOnlyFlag, dashboardCode]);

  useEffect(() => {
    if (role !== "admin") {
      let data = [];
      if (!dashboardData) return;
      dashboardData.forEach((e) => {
        if (e.is_public) {
          let heading = e.heading;
          let items = e.items.filter((item) => {
            return item.is_public === true;
          });
          data.push({ heading, items });
        }
      });
      setFilteredDashboardData(data);
    } else {
      setFilteredDashboardData(dashboardData);
    }
  }, [dashboardData, role]);

  useEffect(() => {
    if (role !== "admin") {
      let data = [];
      if (!topMenu) return;
      topMenu.forEach((e) => {
        if (e.is_public) {
          let content = e.content;
          const tabs = content.tabs.filter((item) => {
            return item.is_public === true;
          });
          data.push({ ...e, content: { ...content, tabs } });
        }
      });
      setFilteredTopMenu(data);
    } else {
      setFilteredTopMenu(topMenu);
    }
  }, [topMenu, role]);

  useEffect(() => {
    if (!filteredTopMenu) return;
    if (!filteredTopMenu.length) return;

    setMenu(filteredTopMenu[0].content.tabs);
    setSelectedTopMenu(filteredTopMenu[0]);
  }, [filteredTopMenu]);

  const displayDashboardUI = () => {
    return (
      <div className="col-12">
        <div className="row d-flex flex-cloumn">
          {filteredDashboardData &&
            filteredDashboardData.length > 0 &&
            filteredDashboardData.map((content, index) => (
              <div className="col-lg-3 p-2" key={index}>
                {content.link ? (
                  <div>
                    <h5
                      onClick={() => {
                        handleLinkClick(content.link);
                      }}
                      className="fw-semibold"
                      style={{
                        color: headingColor,
                        transition: "0.5s all",
                        fontSize: "15px",
                        display: "inline-block",
                        cursor: "pointer",
                      }}
                    >
                      {content.heading}
                    </h5>
                  </div>
                ) : (
                  <div>
                    {" "}
                    <h5
                      className="fw-semibold"
                      style={{
                        display: "inline-block",
                        transition: "0.5s all",
                        fontSize: "15px",
                      }}
                    >
                      {content.heading}
                    </h5>
                  </div>
                )}
                {content.items.map((item, index) => (
                  <div key={index}>
                    {item.link ? (
                      <div>
                        <p
                          key={index}
                          style={{
                            fontSize: "13px",
                            cursor: "pointer",
                            display: "inline-block",
                          }}
                          onClick={() => {
                            handleLinkClick(item.link);
                          }}
                          onMouseOver={(e) => {
                            e.target.style.textDecoration = "underline";
                          }}
                          onMouseOut={(e) => {
                            e.target.style.textDecoration = "none";
                          }}
                          className="m-0 p-0"
                        >
                          <span className="fw-semibold me-2">{item.index}</span>
                          {item.text}
                        </p>
                      </div>
                    ) : (
                      <div>
                        {" "}
                        <p
                          key={index}
                          style={{
                            fontSize: "13px",
                            display: "inline-block",
                            cursor: "not-allowed",
                          }}
                          className="m-0 p-0"
                        >
                          <span className="fw-semibold me-2">{item.index}</span>
                          {item.text}
                        </p>
                      </div>
                    )}

                    {item.items &&
                      item.items.map((item) => (
                        <>
                          {item.link ? (
                            <p
                              key={index}
                              style={{
                                fontSize: "13px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                handleLinkClick(item.link);
                              }}
                              onMouseOver={(e) => {
                                e.target.style.textDecoration = "underline";
                              }}
                              onMouseOut={(e) => {
                                e.target.style.textDecoration = "none";
                              }}
                              className="m-0 ps-2"
                            >
                              <span className="fw-semibold me-2">
                                {item.index}
                              </span>
                              {item.text}
                            </p>
                          ) : (
                            <p
                              key={index}
                              style={{
                                fontSize: "13px",
                                cursor: "pointer",
                              }}
                              className="m-0 ps-2"
                            >
                              <span className="fw-semibold me-2">
                                {item.index}
                              </span>
                              {item.text}
                            </p>
                          )}
                        </>
                      ))}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="container-fluid p-3 ">
        {!dashboardOnlyFlag && (
          <>
            {sideMenu ? (
              <>
                <div className="d-flex  flex-row">
                  <div className="">
                    {sideMenu &&
                      sideMenu.map((item, index) => (
                        <h2
                          key={index}
                          className=" w-100 position-sticky leftmenu-tab fs-6 p-3 px-4 text-white"
                          onClick={() => {
                            fetchTopMenuData(item.content_url);
                            setPrimaryColor(item.color1);
                            setSecondaryColor(item.color2);
                            setHeadingColor(item.color3);
                            setDashboardData(null);
                          }}
                          style={{
                            backgroundColor: item.color1,
                            transition: "0.5s all",
                          }}
                        >
                          {item.tab}
                        </h2>
                      ))}
                  </div>
                  <div className=" dashboard ms-3 col bg-white">
                    <div className="d-flex mt-2">
                      {filteredTopMenu &&
                        filteredTopMenu.length > 0 &&
                        filteredTopMenu.map((item) => (
                          <div
                            key={item.tab}
                            className="p-1 px-2  rounded mx-2 "
                            style={{
                              cursor: "pointer",
                              fontSize: "15px",
                              border: `1px solid ${primaryColor}`,
                              color: primaryColor,
                              transition: "0.5s all",
                            }}
                            onClick={() => {
                              onClickTopMenu(item);
                            }}
                          >
                            {item.tab}
                          </div>
                        ))}
                    </div>

                    {selectedTopMenu && (
                      <div className="mt-3 ">
                        <h3
                          style={{
                            color: primaryColor,
                            transition: "0.5s all",
                          }}
                        >
                          {selectedTopMenu.tab}
                        </h3>
                        <p
                          className="text-secondary"
                          style={{ fontSize: "14px" }}
                        >
                          {selectedTopMenu.content.description}
                        </p>
                      </div>
                    )}
                    {menu && (
                      <div className="d-flex">
                        {menu &&
                          menu.map((item) => (
                            <div
                              key={item.tab}
                              className="p-1 px-2  rounded mx-2 "
                              style={{
                                cursor: "pointer",
                                fontSize: "13px",
                                border: `1px solid ${primaryColor}`,
                                color: primaryColor,
                                transition: "0.5s all",
                              }}
                              onClick={() => {
                                setSelectedMenu(item);
                                fetchDashboardData(item.content_url);
                              }}
                            >
                              {item.tab}
                            </div>
                          ))}
                      </div>
                    )}

                    <div className="row my-2 p-2 w-100">
                      {selectedMenu && (
                        <div className="col-12">
                          <h4
                            className="fw-semibold fs-5"
                            style={{
                              color: secondaryColor,
                              transition: "0.5s all",
                            }}
                          >
                            {selectedMenu.tab}
                          </h4>
                        </div>
                      )}

                      {displayDashboardUI()}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>data not found</>
            )}
          </>
        )}

        {dashboardOnlyFlag && displayDashboardUI()}
      </div>
    </>
  );
};
export { PdfExplorerDashboard };
