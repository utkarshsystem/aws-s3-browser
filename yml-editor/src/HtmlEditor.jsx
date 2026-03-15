import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
const HtmlEditor = ({ data, setFlag, flag, handleRequest }) => {
    const [htmlPageData, setHtmlPageData] = useState({
        code: null,
        subscriber_code: null,
        seo_title: "",
        seo_description: "",
        seo_keywords: "",
        html: "",
    });
    const handleChange = (e) => {
        setHtmlPageData((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))

    }

    const handleClose = () => setFlag(false);
    useEffect(() => {
        if (data) {
            let dta = { ...data, _id: undefined }
            setHtmlPageData(dta);
        }
    }, [data])
    const handleSave = () => {
        try {
            handleRequest(htmlPageData);
            setFlag(false);
        }
        catch (e) {
            toast.error(e.message)
        }
    }
    return (
        <div>

            <Offcanvas show={flag} onHide={handleClose}  >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Html Page Editor</Offcanvas.Title>
                    <button className='btn btn-success ms-auto me-3 text-white' onClick={handleSave}>Save</button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='p-3'>
                        <div className="row">
                            <div className="col-9">
                                <div className='mb-2'>
                                    <label className="form-label" >SEO Title</label>
                                    <input type="text" name="seo_title" value={htmlPageData.seo_title} onChange={handleChange} className="form-control form-control-sm" />
                                </div>
                                <div className='mb-2'>
                                    <label className="form-label">SEO Description</label>
                                    <textarea name="seo_description" value={htmlPageData.seo_description} onChange={handleChange} className="form-control form-control-sm" rows="3"></textarea>
                                </div>
                                <div className='mb-2'>
                                    <label className="form-label">SEO Keywords</label>
                                    <textarea name="seo_keywords" value={htmlPageData.seo_keywords} onChange={handleChange} className="form-control form-control-sm" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='mb-2'>
                                    <label className="form-label" >Code</label>
                                    <input type="text" name="code" value={htmlPageData.code} onChange={handleChange} className="form-control form-control-sm" />
                                </div>
                                <div className='mb-2'>
                                    <label className="form-label" >Subscriber Code</label>
                                    <input type="text" name="subscriber_code" value={htmlPageData.subscriber_code} onChange={handleChange} className="form-control form-control-sm" />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label className="form-label" >HTML</label>
                                    <textarea name="html" value={htmlPageData.html} onChange={handleChange} className="form-control" rows="20"></textarea>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label className="form-label">Preview</label>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: htmlPageData.html }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}

export default HtmlEditor
