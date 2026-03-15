(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "S3BrowserComponent": ()=>S3BrowserComponent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$client$2d$s3$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$2f$dist$2d$es$2f$commands$2f$DeleteObjectCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-sdk+client-s3@3.1009.0/node_modules/@aws-sdk/client-s3/dist-es/commands/DeleteObjectCommand.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$client$2d$s3$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$2f$dist$2d$es$2f$commands$2f$GetObjectCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-sdk+client-s3@3.1009.0/node_modules/@aws-sdk/client-s3/dist-es/commands/GetObjectCommand.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$client$2d$s3$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$2f$dist$2d$es$2f$commands$2f$ListBucketsCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-sdk+client-s3@3.1009.0/node_modules/@aws-sdk/client-s3/dist-es/commands/ListBucketsCommand.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$client$2d$s3$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$2f$dist$2d$es$2f$commands$2f$ListObjectsV2Command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-sdk+client-s3@3.1009.0/node_modules/@aws-sdk/client-s3/dist-es/commands/ListObjectsV2Command.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$client$2d$s3$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$2f$dist$2d$es$2f$commands$2f$PutObjectCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-sdk+client-s3@3.1009.0/node_modules/@aws-sdk/client-s3/dist-es/commands/PutObjectCommand.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$client$2d$s3$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$2f$dist$2d$es$2f$S3Client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-sdk+client-s3@3.1009.0/node_modules/@aws-sdk/client-s3/dist-es/S3Client.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$s3$2d$request$2d$presigner$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-sdk+s3-request-presigner@3.1009.0/node_modules/@aws-sdk/s3-request-presigner/dist-es/getSignedUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function S3BrowserComponent(param) {
    let { region, credentialsProvider, onOpenInEditor } = param;
    _s();
    const [buckets, setBuckets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentBucket, setCurrentBucket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPrefix, setCurrentPrefix] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "S3BrowserComponent.useCallback[getClient]": async ()=>{
            const credentials = await credentialsProvider();
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$client$2d$s3$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$2f$dist$2d$es$2f$S3Client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["S3Client"]({
                region,
                credentials
            });
        }
    }["S3BrowserComponent.useCallback[getClient]"], [
        region,
        credentialsProvider
    ]);
    // List all buckets on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "S3BrowserComponent.useEffect": ()=>{
            setLoading(true);
            setError(null);
            getClient().then({
                "S3BrowserComponent.useEffect": (client)=>client.send(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$client$2d$s3$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$2f$dist$2d$es$2f$commands$2f$ListBucketsCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ListBucketsCommand"]({}))
            }["S3BrowserComponent.useEffect"]).then({
                "S3BrowserComponent.useEffect": (res)=>{
                    var _res_Buckets;
                    var _res_Buckets_map;
                    return setBuckets((_res_Buckets_map = (_res_Buckets = res.Buckets) === null || _res_Buckets === void 0 ? void 0 : _res_Buckets.map({
                        "S3BrowserComponent.useEffect": (b)=>b.Name
                    }["S3BrowserComponent.useEffect"])) !== null && _res_Buckets_map !== void 0 ? _res_Buckets_map : []);
                }
            }["S3BrowserComponent.useEffect"]).catch({
                "S3BrowserComponent.useEffect": (err)=>setError(err.message)
            }["S3BrowserComponent.useEffect"]).finally({
                "S3BrowserComponent.useEffect": ()=>setLoading(false)
            }["S3BrowserComponent.useEffect"]);
        }
    }["S3BrowserComponent.useEffect"], [
        getClient
    ]);
    const openBucket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "S3BrowserComponent.useCallback[openBucket]": async function(bucket) {
            let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
            setLoading(true);
            setError(null);
            try {
                const client = await getClient();
                const res = await client.send(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$client$2d$s3$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$2f$dist$2d$es$2f$commands$2f$ListObjectsV2Command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ListObjectsV2Command"]({
                    Bucket: bucket,
                    Prefix: prefix,
                    Delimiter: '/'
                }));
                var _res_CommonPrefixes;
                const folders = ((_res_CommonPrefixes = res.CommonPrefixes) !== null && _res_CommonPrefixes !== void 0 ? _res_CommonPrefixes : []).map({
                    "S3BrowserComponent.useCallback[openBucket].folders": (cp)=>({
                            key: cp.Prefix,
                            isFolder: true
                        })
                }["S3BrowserComponent.useCallback[openBucket].folders"]);
                var _res_Contents;
                const files = ((_res_Contents = res.Contents) !== null && _res_Contents !== void 0 ? _res_Contents : []).filter({
                    "S3BrowserComponent.useCallback[openBucket].files": (obj)=>obj.Key !== prefix
                }["S3BrowserComponent.useCallback[openBucket].files"]).map({
                    "S3BrowserComponent.useCallback[openBucket].files": (obj)=>({
                            key: obj.Key,
                            size: obj.Size,
                            lastModified: obj.LastModified,
                            isFolder: false
                        })
                }["S3BrowserComponent.useCallback[openBucket].files"]);
                setCurrentBucket(bucket);
                setCurrentPrefix(prefix);
                setItems([
                    ...folders,
                    ...files
                ]);
            } catch (err) {
                setError(err.message);
            } finally{
                setLoading(false);
            }
        }
    }["S3BrowserComponent.useCallback[openBucket]"], [
        getClient
    ]);
    const handleDownload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "S3BrowserComponent.useCallback[handleDownload]": async (key)=>{
            if (!currentBucket) return;
            try {
                const client = await getClient();
                const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$s3$2d$request$2d$presigner$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSignedUrl"])(client, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$client$2d$s3$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$2f$dist$2d$es$2f$commands$2f$GetObjectCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GetObjectCommand"]({
                    Bucket: currentBucket,
                    Key: key
                }), {
                    expiresIn: 300
                });
                const a = document.createElement('a');
                a.href = url;
                var _key_split_pop;
                a.download = (_key_split_pop = key.split('/').pop()) !== null && _key_split_pop !== void 0 ? _key_split_pop : key;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } catch (err) {
                setError(err.message);
            }
        }
    }["S3BrowserComponent.useCallback[handleDownload]"], [
        currentBucket,
        getClient
    ]);
    const handleDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "S3BrowserComponent.useCallback[handleDelete]": async (key)=>{
            if (!currentBucket || !window.confirm('Delete "'.concat(key, '"?'))) return;
            try {
                const client = await getClient();
                await client.send(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$client$2d$s3$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$2f$dist$2d$es$2f$commands$2f$DeleteObjectCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DeleteObjectCommand"]({
                    Bucket: currentBucket,
                    Key: key
                }));
                await openBucket(currentBucket, currentPrefix);
            } catch (err) {
                setError(err.message);
            }
        }
    }["S3BrowserComponent.useCallback[handleDelete]"], [
        currentBucket,
        currentPrefix,
        getClient,
        openBucket
    ]);
    const handleUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "S3BrowserComponent.useCallback[handleUpload]": async (files)=>{
            if (!currentBucket || !files) return;
            setLoading(true);
            try {
                const client = await getClient();
                for (const file of Array.from(files)){
                    await client.send(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$sdk$2b$client$2d$s3$40$3$2e$1009$2e$0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$2f$dist$2d$es$2f$commands$2f$PutObjectCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PutObjectCommand"]({
                        Bucket: currentBucket,
                        Key: currentPrefix + file.name,
                        Body: file,
                        ContentType: file.type
                    }));
                }
                await openBucket(currentBucket, currentPrefix);
            } catch (err) {
                setError(err.message);
            } finally{
                setLoading(false);
            }
        }
    }["S3BrowserComponent.useCallback[handleUpload]"], [
        currentBucket,
        currentPrefix,
        getClient,
        openBucket
    ]);
    const breadcrumbs = currentBucket ? [
        currentBucket,
        ...currentPrefix.split('/').filter(Boolean)
    ] : [];
    const handleBreadcrumb = (index)=>{
        if (!currentBucket) return;
        if (index === 0) {
            openBucket(currentBucket, '');
        } else {
            const parts = currentPrefix.split('/').filter(Boolean);
            openBucket(currentBucket, parts.slice(0, index).join('/') + '/');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "s3-browser-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "s3-browser-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "s3-btn s3-btn-secondary",
                        onClick: ()=>{
                            setCurrentBucket(null);
                            setCurrentPrefix('');
                            setItems([]);
                        },
                        children: "⌂ All Buckets"
                    }, void 0, false, {
                        fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    breadcrumbs.map((crumb, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "s3-breadcrumb",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "s3-breadcrumb-sep",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "s3-btn s3-btn-crumb".concat(i === breadcrumbs.length - 1 ? ' active' : ''),
                                    onClick: ()=>handleBreadcrumb(i),
                                    children: crumb
                                }, void 0, false, {
                                    fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)),
                    currentBucket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "s3-toolbar-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                multiple: true,
                                ref: fileInputRef,
                                style: {
                                    display: 'none'
                                },
                                onChange: (e)=>handleUpload(e.target.files)
                            }, void 0, false, {
                                fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "s3-btn s3-btn-primary",
                                onClick: ()=>{
                                    var _fileInputRef_current;
                                    return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                },
                                children: "↑ Upload"
                            }, void 0, false, {
                                fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "s3-error",
                children: [
                    "⚠ ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                lineNumber: 206,
                columnNumber: 17
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "s3-loading",
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                lineNumber: 207,
                columnNumber: 19
            }, this),
            !currentBucket && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "s3-table",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Bucket Name"
                                }, void 0, false, {
                                    fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Region"
                                }, void 0, false, {
                                    fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                    lineNumber: 213,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: [
                            buckets.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 2,
                                    className: "s3-empty",
                                    children: "No buckets found"
                                }, void 0, false, {
                                    fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                    lineNumber: 217,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                lineNumber: 217,
                                columnNumber: 15
                            }, this),
                            buckets.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "s3-row-clickable",
                                    onClick: ()=>openBucket(b),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: [
                                                "🨣 ",
                                                b
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: region
                                        }, void 0, false, {
                                            fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, b, true, {
                                    fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this),
            currentBucket && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "s3-table",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Name"
                                }, void 0, false, {
                                    fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                    lineNumber: 233,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Size"
                                }, void 0, false, {
                                    fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                    lineNumber: 233,
                                    columnNumber: 30
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Last Modified"
                                }, void 0, false, {
                                    fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                    lineNumber: 233,
                                    columnNumber: 43
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {}, void 0, false, {
                                    fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                    lineNumber: 233,
                                    columnNumber: 65
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: [
                            items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 4,
                                    className: "s3-empty",
                                    children: "Empty folder"
                                }, void 0, false, {
                                    fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                    lineNumber: 237,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, this),
                            items.map((item)=>{
                                var _item_lastModified;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: item.isFolder ? 's3-row-clickable' : '',
                                    onClick: ()=>item.isFolder && openBucket(currentBucket, item.key),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: [
                                                item.isFolder ? '&#x1F4C1; ' : '&#x1F4C4; ',
                                                item.key.slice(currentPrefix.length)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: item.isFolder ? '' : formatBytes(item.size)
                                        }, void 0, false, {
                                            fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: item.isFolder ? '' : (_item_lastModified = item.lastModified) === null || _item_lastModified === void 0 ? void 0 : _item_lastModified.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "s3-actions-cell",
                                            children: !item.isFolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "s3-btn s3-btn-sm",
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            handleDownload(item.key);
                                                        },
                                                        children: "Download"
                                                    }, void 0, false, {
                                                        fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 23
                                                    }, this),
                                                    onOpenInEditor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "s3-btn s3-btn-sm s3-btn-info",
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            onOpenInEditor(currentBucket, item.key);
                                                        },
                                                        children: "Open"
                                                    }, void 0, false, {
                                                        fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "s3-btn s3-btn-sm s3-btn-danger",
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            handleDelete(item.key);
                                                        },
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.key, true, {
                                    fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_s(S3BrowserComponent, "UbB6uGx5Pie+omlWrDU/3/8nLQc=");
_c = S3BrowserComponent;
function formatBytes(bytes) {
    if (bytes === undefined) return '';
    if (bytes < 1024) return "".concat(bytes, " B");
    if (bytes < 1024 * 1024) return "".concat((bytes / 1024).toFixed(1), " KB");
    return "".concat((bytes / (1024 * 1024)).toFixed(1), " MB");
}
var _c;
__turbopack_context__.k.register(_c, "S3BrowserComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/s3-browser-plugin-ui/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$s3$2d$browser$2d$plugin$2d$ui$2f$src$2f$S3BrowserComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/s3-browser-plugin-ui/src/S3BrowserComponent.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
async function credentialsProvider() {
    const res = await fetch('/api/credentials');
    if (!res.ok) {
        const body = await res.json().catch(()=>({}));
        var _body_error;
        throw new Error((_body_error = body.error) !== null && _body_error !== void 0 ? _body_error : 'Failed to fetch AWS credentials from server');
    }
    const { accessKeyId, secretAccessKey, sessionToken } = await res.json();
    return {
        accessKeyId,
        secretAccessKey,
        sessionToken
    };
}
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$s3$2d$browser$2d$plugin$2d$ui$2f$src$2f$S3BrowserComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S3BrowserComponent"], {
        region: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_AWS_REGION || 'us-east-1',
        credentialsProvider: credentialsProvider,
        onOpenInEditor: (bucket, key)=>router.push("/editor?bucket=".concat(encodeURIComponent(bucket), "&key=").concat(encodeURIComponent(key)))
    }, void 0, false, {
        fileName: "[project]/s3-browser-plugin-ui/app/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Home, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=s3-browser-plugin-ui_6455c9af._.js.map