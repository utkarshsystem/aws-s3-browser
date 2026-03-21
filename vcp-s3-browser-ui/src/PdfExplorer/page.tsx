"use client";
import { useEffect, useState } from "react";

interface Props {
    subscriberCode: string;
}

export default function PdfExplorerDashboardUI({ subscriberCode }: Props) {
    const [leftMenu, setLeftMenu] = useState<any[]>([]);
    const [topMenu, setTopMenu] = useState<any[]>([]);
    const [subMenu, setSubMenu] = useState<any[]>([]);
    const [activeLeft, setActiveLeft] = useState<any>(null);
    const [activeTop, setActiveTop] = useState<any>(null);
    const [activeSub, setActiveSub] = useState<any>(null);
    const [content, setContent] = useState<any>(null);

    const CODE_MAP: Record<string, string> = {
        RES_IN: "raisein-left-tree-explorer",
        VIL: "vil-left-tree-explorer",
        ACSL: "acslres-left-tree-explorer",
        TA: "tacad-left-tree-explorer",
        "opportunities-explorer": "oppexp-leftmenu",
    };

    // ✅ LEFT MENU
    useEffect(() => {
        const loadLeftMenu = async () => {
            try {
                const code = CODE_MAP[subscriberCode];
                const res = await fetch(
                    `https://elearning.virtusasystems.com/api/course_pdf_details/${subscriberCode.toLowerCase()}/${code}`
                );
                const data = await res.json();

                setLeftMenu(data.data || []);
                setActiveLeft(data.data?.[0] || null);
            } catch (err) {
                console.error("Left menu error:", err);
            }
        };

        loadLeftMenu();
    }, [subscriberCode]);

    // ✅ TOP MENU
    useEffect(() => {
        if (!activeLeft) return;

        const loadTopMenu = async () => {
            try {
                const res = await fetch(
                    `https://elearning.virtusasystems.com/api${activeLeft.content_url}`
                );
                const data = await res.json();

                setTopMenu(data.data || []);
                setActiveTop(data.data?.[0] || null);
                setSubMenu(data.data?.[0]?.content?.tabs || []);
                setActiveSub(data.data?.[0]?.content?.tabs?.[0] || null);
            } catch (err) {
                console.error("Top menu error:", err);
            }
        };

        loadTopMenu();
    }, [activeLeft]);

    // ✅ SUB MENU CHANGE
    useEffect(() => {
        if (!activeTop) return;

        setSubMenu(activeTop.content?.tabs || []);
        setActiveSub(activeTop.content?.tabs?.[0] || null);
    }, [activeTop]);

    // ✅ FINAL CONTENT
    useEffect(() => {
        if (!activeSub) return;

        const loadContent = async () => {
            try {
                const res = await fetch(
                    `https://elearning.virtusasystems.com/api${activeSub.content_url}`
                );
                const data = await res.json();

                setContent(data); // 🔥 contains bucket_name
            } catch (err) {
                console.error("Content error:", err);
            }
        };

        loadContent();
    }, [activeSub]);

    // ✅ HANDLE PDF CLICK
    const handlePdfClick = async (link: string) => {
        try {
            if (!content?.bucket_name) {
                window.open(link, "_blank");
                return;
            }

            const res = await fetch(
                `https://elearning.virtusasystems.com/api/pdf_explorer/get_pdf_url`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        bucketName: content.bucket_name,
                        key: link,
                    }),
                }
            );

            if (res.ok) {
                const data = await res.json();
                window.open(data.url, "_blank");
            }
        } catch (err) {
            console.error("PDF open error:", err);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">

                {/* 🔸 LEFT MENU */}
                <div className="col-lg-2 col-md-3">
                    {leftMenu.map((item, i) => (
                        <button
                            key={i}
                            className="btn w-100 mb-2 text-white"
                            style={{
                                backgroundColor: "#F39317",
                                fontSize: "16px",
                                borderTopLeftRadius: "35px",
                                borderBottomLeftRadius: "35px",
                            }}
                            onClick={() => setActiveLeft(item)}
                        >
                            {item.tab}
                        </button>
                    ))}
                </div>

                {/* 🔸 RIGHT SIDE */}
                <div className="col-lg-10 col-md-9 p-4">

                    {/* TOP TABS */}
                    <div className="mb-3 d-flex flex-wrap">
                        {topMenu.map((item, i) => (
                            <button
                                key={i}
                                className="btn me-2 mb-2"
                                style={{
                                    border: "1px solid #F39317",
                                    color: "#F39317",
                                    backgroundColor: "transparent",
                                    fontSize: "14px",
                                }}
                                onClick={() => setActiveTop(item)}
                            >
                                {item.tab}
                            </button>
                        ))}
                    </div>

                    {/* TOP CONTENT */}
                    {activeTop && (
                        <div className="mb-2">
                            <h4 className="fw-semibold" style={{ color: "#f39c12" }}>
                                {activeTop.tab}
                            </h4>
                            <p className="text-secondary mb-1">
                                {activeTop.content?.description}
                            </p>
                        </div>
                    )}

                    {/* SUB MENU */}
                    <div className="mb-3 d-flex flex-wrap">
                        {subMenu.map((item: any, i: number) => (
                            <button
                                key={i}
                                className="btn me-2 mb-2"
                                style={{
                                    border: "1px solid #f39c12",
                                    color: "#F39317",
                                    backgroundColor: "transparent",
                                    fontSize: "13px",
                                }}
                                onClick={() => setActiveSub(item)}
                            >
                                {item.tab}
                            </button>
                        ))}
                    </div>

                    {/* SUB TITLE */}
                    {activeSub && (
                        <h5 className="text-success mb-3">
                            {activeSub.tab}
                        </h5>
                    )}

                    {/* 🔥 CONTENT GRID */}
                    <div className="row">
                        {content?.data?.map((section: any, i: number) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 p-2" key={i}>

                                <h6 className="fw-semibold">
                                    {section.heading}
                                </h6>

                                {section.items.map((item: any, j: number) => (
                                    <div key={j} className="d-flex align-items-center mb-1">
                                        {item.link ? (
                                            <p
                                                className="m-0"
                                                onClick={() => handlePdfClick(item.link)}
                                                style={{
                                                    fontSize: "13px",
                                                    cursor: "pointer",
                                                    display: "inline-block",
                                                    textDecoration: "none",
                                                }}
                                                onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                                                onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
                                            >
                                                {item.text}
                                            </p>
                                        ) : (
                                            <p
                                                className="m-0  d-flex align-items-center"
                                                style={{ fontSize: "13px", cursor: "not-allowed" }}
                                            >
                                                {/* <i className="bi bi-slash-circle me-1"></i> */}
                                                {item.text}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
}