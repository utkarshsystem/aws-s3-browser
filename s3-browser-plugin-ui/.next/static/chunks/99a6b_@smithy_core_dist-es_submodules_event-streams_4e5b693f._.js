(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js [app-client] (ecmascript) <locals>");
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "EventStreamSerde": ()=>EventStreamSerde
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$utf8$40$4$2e$2$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-utf8@4.2.2/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$utf8$40$4$2e$2$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-utf8@4.2.2/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js [app-client] (ecmascript)");
;
;
class EventStreamSerde {
    async serializeEventStream(param) {
        let { eventStream, requestSchema, initialRequest } = param;
        const marshaller = this.marshaller;
        const eventStreamMember = requestSchema.getEventStreamMember();
        const unionSchema = requestSchema.getMemberSchema(eventStreamMember);
        const serializer = this.serializer;
        const defaultContentType = this.defaultContentType;
        const initialRequestMarker = Symbol("initialRequestMarker");
        const eventStreamIterable = {
            async *[Symbol.asyncIterator] () {
                if (initialRequest) {
                    const headers = {
                        ":event-type": {
                            type: "string",
                            value: "initial-request"
                        },
                        ":message-type": {
                            type: "string",
                            value: "event"
                        },
                        ":content-type": {
                            type: "string",
                            value: defaultContentType
                        }
                    };
                    serializer.write(requestSchema, initialRequest);
                    const body = serializer.flush();
                    yield {
                        [initialRequestMarker]: true,
                        headers,
                        body
                    };
                }
                for await (const page of eventStream){
                    yield page;
                }
            }
        };
        return marshaller.serialize(eventStreamIterable, (event)=>{
            if (event[initialRequestMarker]) {
                return {
                    headers: event.headers,
                    body: event.body
                };
            }
            var _Object_keys_find;
            const unionMember = (_Object_keys_find = Object.keys(event).find((key)=>{
                return key !== "__type";
            })) !== null && _Object_keys_find !== void 0 ? _Object_keys_find : "";
            const { additionalHeaders, body, eventType, explicitPayloadContentType } = this.writeEventBody(unionMember, unionSchema, event);
            const headers = {
                ":event-type": {
                    type: "string",
                    value: eventType
                },
                ":message-type": {
                    type: "string",
                    value: "event"
                },
                ":content-type": {
                    type: "string",
                    value: explicitPayloadContentType !== null && explicitPayloadContentType !== void 0 ? explicitPayloadContentType : defaultContentType
                },
                ...additionalHeaders
            };
            return {
                headers,
                body
            };
        });
    }
    async deserializeEventStream(param) {
        let { response, responseSchema, initialResponseContainer } = param;
        var _firstEvent_value;
        const marshaller = this.marshaller;
        const eventStreamMember = responseSchema.getEventStreamMember();
        const unionSchema = responseSchema.getMemberSchema(eventStreamMember);
        const memberSchemas = unionSchema.getMemberSchemas();
        const initialResponseMarker = Symbol("initialResponseMarker");
        const asyncIterable = marshaller.deserialize(response.body, async (event)=>{
            var _Object_keys_find;
            const unionMember = (_Object_keys_find = Object.keys(event).find((key)=>{
                return key !== "__type";
            })) !== null && _Object_keys_find !== void 0 ? _Object_keys_find : "";
            const body = event[unionMember].body;
            if (unionMember === "initial-response") {
                const dataObject = await this.deserializer.read(responseSchema, body);
                delete dataObject[eventStreamMember];
                return {
                    [initialResponseMarker]: true,
                    ...dataObject
                };
            } else if (unionMember in memberSchemas) {
                const eventStreamSchema = memberSchemas[unionMember];
                if (eventStreamSchema.isStructSchema()) {
                    const out = {};
                    let hasBindings = false;
                    for (const [name, member] of eventStreamSchema.structIterator()){
                        const { eventHeader, eventPayload } = member.getMergedTraits();
                        hasBindings = hasBindings || Boolean(eventHeader || eventPayload);
                        if (eventPayload) {
                            if (member.isBlobSchema()) {
                                out[name] = body;
                            } else if (member.isStringSchema()) {
                                var _this_serdeContext;
                                var _this_serdeContext_utf8Encoder;
                                out[name] = ((_this_serdeContext_utf8Encoder = (_this_serdeContext = this.serdeContext) === null || _this_serdeContext === void 0 ? void 0 : _this_serdeContext.utf8Encoder) !== null && _this_serdeContext_utf8Encoder !== void 0 ? _this_serdeContext_utf8Encoder : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$utf8$40$4$2e$2$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8"])(body);
                            } else if (member.isStructSchema()) {
                                out[name] = await this.deserializer.read(member, body);
                            }
                        } else if (eventHeader) {
                            var _event_unionMember_headers_name;
                            const value = (_event_unionMember_headers_name = event[unionMember].headers[name]) === null || _event_unionMember_headers_name === void 0 ? void 0 : _event_unionMember_headers_name.value;
                            if (value != null) {
                                if (member.isNumericSchema()) {
                                    if (value && typeof value === "object" && "bytes" in value) {
                                        out[name] = BigInt(value.toString());
                                    } else {
                                        out[name] = Number(value);
                                    }
                                } else {
                                    out[name] = value;
                                }
                            }
                        }
                    }
                    if (hasBindings) {
                        return {
                            [unionMember]: out
                        };
                    }
                    if (body.byteLength === 0) {
                        return {
                            [unionMember]: {}
                        };
                    }
                }
                return {
                    [unionMember]: await this.deserializer.read(eventStreamSchema, body)
                };
            } else {
                return {
                    $unknown: event
                };
            }
        });
        const asyncIterator = asyncIterable[Symbol.asyncIterator]();
        const firstEvent = await asyncIterator.next();
        if (firstEvent.done) {
            return asyncIterable;
        }
        if ((_firstEvent_value = firstEvent.value) === null || _firstEvent_value === void 0 ? void 0 : _firstEvent_value[initialResponseMarker]) {
            if (!responseSchema) {
                throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
            }
            for (const [key, value] of Object.entries(firstEvent.value)){
                initialResponseContainer[key] = value;
            }
        }
        return {
            async *[Symbol.asyncIterator] () {
                var _firstEvent_value;
                if (!(firstEvent === null || firstEvent === void 0 ? void 0 : (_firstEvent_value = firstEvent.value) === null || _firstEvent_value === void 0 ? void 0 : _firstEvent_value[initialResponseMarker])) {
                    yield firstEvent.value;
                }
                while(true){
                    const { done, value } = await asyncIterator.next();
                    if (done) {
                        break;
                    }
                    yield value;
                }
            }
        };
    }
    writeEventBody(unionMember, unionSchema, event) {
        var _this_serdeContext;
        const serializer = this.serializer;
        let eventType = unionMember;
        let explicitPayloadMember = null;
        let explicitPayloadContentType;
        const isKnownSchema = (()=>{
            const struct = unionSchema.getSchema();
            return struct[4].includes(unionMember);
        })();
        const additionalHeaders = {};
        if (!isKnownSchema) {
            const [type, value] = event[unionMember];
            eventType = type;
            serializer.write(15, value);
        } else {
            const eventSchema = unionSchema.getMemberSchema(unionMember);
            if (eventSchema.isStructSchema()) {
                for (const [memberName, memberSchema] of eventSchema.structIterator()){
                    const { eventHeader, eventPayload } = memberSchema.getMergedTraits();
                    if (eventPayload) {
                        explicitPayloadMember = memberName;
                    } else if (eventHeader) {
                        const value = event[unionMember][memberName];
                        let type = "binary";
                        if (memberSchema.isNumericSchema()) {
                            if ((-2) ** 31 <= value && value <= 2 ** 31 - 1) {
                                type = "integer";
                            } else {
                                type = "long";
                            }
                        } else if (memberSchema.isTimestampSchema()) {
                            type = "timestamp";
                        } else if (memberSchema.isStringSchema()) {
                            type = "string";
                        } else if (memberSchema.isBooleanSchema()) {
                            type = "boolean";
                        }
                        if (value != null) {
                            additionalHeaders[memberName] = {
                                type,
                                value
                            };
                            delete event[unionMember][memberName];
                        }
                    }
                }
                if (explicitPayloadMember !== null) {
                    const payloadSchema = eventSchema.getMemberSchema(explicitPayloadMember);
                    if (payloadSchema.isBlobSchema()) {
                        explicitPayloadContentType = "application/octet-stream";
                    } else if (payloadSchema.isStringSchema()) {
                        explicitPayloadContentType = "text/plain";
                    }
                    serializer.write(payloadSchema, event[unionMember][explicitPayloadMember]);
                } else {
                    serializer.write(eventSchema, event[unionMember]);
                }
            } else if (eventSchema.isUnitSchema()) {
                serializer.write(eventSchema, {});
            } else {
                throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
            }
        }
        var _serializer_flush;
        const messageSerialization = (_serializer_flush = serializer.flush()) !== null && _serializer_flush !== void 0 ? _serializer_flush : new Uint8Array();
        var _this_serdeContext_utf8Decoder;
        const body = typeof messageSerialization === "string" ? ((_this_serdeContext_utf8Decoder = (_this_serdeContext = this.serdeContext) === null || _this_serdeContext === void 0 ? void 0 : _this_serdeContext.utf8Decoder) !== null && _this_serdeContext_utf8Decoder !== void 0 ? _this_serdeContext_utf8Decoder : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$utf8$40$4$2e$2$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromUtf8"])(messageSerialization) : messageSerialization;
        return {
            body,
            eventType,
            explicitPayloadContentType,
            additionalHeaders
        };
    }
    constructor({ marshaller, serializer, deserializer, serdeContext, defaultContentType }){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "marshaller", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "serializer", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "deserializer", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "serdeContext", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "defaultContentType", void 0);
        this.marshaller = marshaller;
        this.serializer = serializer;
        this.deserializer = deserializer;
        this.serdeContext = serdeContext;
        this.defaultContentType = defaultContentType;
    }
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "EventStreamSerde": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$EventStreamSerde$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventStreamSerde"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$EventStreamSerde$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js [app-client] (ecmascript) <locals>");
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "EventStreamSerde": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["EventStreamSerde"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js [app-client] (ecmascript) <exports>");
}),
}]);

//# sourceMappingURL=99a6b_%40smithy_core_dist-es_submodules_event-streams_4e5b693f._.js.map