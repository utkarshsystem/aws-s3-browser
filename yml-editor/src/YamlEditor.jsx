import React, { useEffect, useState } from 'react'
import { Editor } from '@monaco-editor/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import YAML from 'yaml';
import Offcanvas from 'react-bootstrap/Offcanvas';
function extractTocKeywords(json) {
    let keywords = [];
    json?.course_json?.forEach((item) => {
        keywords.push(item.name)
        item.children?.forEach((subItem) => (
            keywords.push(subItem.name)
        ))
    })
    return keywords
}

const YamlEditor = ({ data, setFlag, flag, handleRequest, collectionName }) => {
    const [yamlData, setYamlData] = useState(null);
    const [seoKeywords,setSeoKeywords]=useState(null);
    const handleClose = () => setFlag(false);
    const handleChange = (value) => {
        setYamlData(value);
    }
    useEffect(() => {
        if(collectionName==="course_toc_details"){
            let keywords = extractTocKeywords(data);
            setSeoKeywords(keywords);
        }
        if (data) {
            let dta = { ...data, _id: undefined }
            let yd = YAML.stringify(dta);
            setYamlData(yd);
        }
        else {
            setYamlData(null);
        }
    }, [data,collectionName])


    const handleSave = () => {
        try {
            let jd = YAML.parse(yamlData);
            if(collectionName==="course_toc_details"){
               jd.seo_keywords=seoKeywords.join(",");
            }
            handleRequest(jd);
            setFlag(false);
        }
        catch (e) {
            toast.error(e.message)
        }
    }
    return (
        <>
            <Offcanvas show={flag} onHide={handleClose}  >
                <Offcanvas.Header closeButton>
                    <div className='d-flex justify-content-end w-100'>
                        <Offcanvas.Title>Yaml Editor</Offcanvas.Title>
                        <button className='btn btn-success ms-auto me-3 text-white' onClick={handleSave}>Save</button>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {collectionName === "course_toc_details" ?
                        <div className='row'>
                            <div className="col-8">
                                <Editor
                            height="80vh"
                                  
                                    defaultLanguage="JSON"
                                    defaultValue={yamlData}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-4 border  p-3">
                                {seoKeywords?.map((keyword) => (
                                    <span>{keyword}, </span>
                                ))}
                            </div>
                        </div> :
                        <Editor
                            height="80vh"
                            defaultLanguage="JSON"
                            defaultValue={yamlData}
                            onChange={handleChange}
                        />
                    }

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

        </>


    )
}

export default YamlEditor