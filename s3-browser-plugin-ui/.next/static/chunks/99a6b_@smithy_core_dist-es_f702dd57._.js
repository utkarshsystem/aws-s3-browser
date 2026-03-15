(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/endpoints/toEndpointV1.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "toEndpointV1": ()=>toEndpointV1
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$url$2d$parser$40$4$2e$2$2e$12$2f$node_modules$2f40$smithy$2f$url$2d$parser$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+url-parser@4.2.12/node_modules/@smithy/url-parser/dist-es/index.js [app-client] (ecmascript)");
;
const toEndpointV1 = (endpoint)=>{
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            const v1Endpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$url$2d$parser$40$4$2e$2$2e$12$2f$node_modules$2f40$smithy$2f$url$2d$parser$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(endpoint.url);
            if (endpoint.headers) {
                v1Endpoint.headers = {};
                for (const [name, values] of Object.entries(endpoint.headers)){
                    v1Endpoint.headers[name.toLowerCase()] = values.join(", ");
                }
            }
            return v1Endpoint;
        }
        return endpoint;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$url$2d$parser$40$4$2e$2$2e$12$2f$node_modules$2f40$smithy$2f$url$2d$parser$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(endpoint);
};
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/setFeature.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "setFeature": ()=>setFeature
});
function setFeature(context, feature, value) {
    if (!context.__smithy_context) {
        context.__smithy_context = {
            features: {}
        };
    } else if (!context.__smithy_context.features) {
        context.__smithy_context.features = {};
    }
    context.__smithy_context.features[feature] = value;
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/deref.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "deref": ()=>deref
});
const deref = (schemaRef)=>{
    if (typeof schemaRef === "function") {
        return schemaRef();
    }
    return schemaRef;
};
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "traitsCache": ()=>traitsCache,
    "translateTraits": ()=>translateTraits
});
const traitsCache = [];
function translateTraits(indicator) {
    if (typeof indicator === "object") {
        return indicator;
    }
    indicator = indicator | 0;
    if (traitsCache[indicator]) {
        return traitsCache[indicator];
    }
    const traits = {};
    let i = 0;
    for (const trait of [
        "httpLabel",
        "idempotent",
        "idempotencyToken",
        "sensitive",
        "httpPayload",
        "httpResponseCode",
        "httpQueryParams"
    ]){
        if ((indicator >> i++ & 1) === 1) {
            traits[trait] = 1;
        }
    }
    return traitsCache[indicator] = traits;
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "NormalizedSchema": ()=>NormalizedSchema,
    "isStaticSchema": ()=>isStaticSchema,
    "simpleSchemaCacheN": ()=>simpleSchemaCacheN,
    "simpleSchemaCacheS": ()=>simpleSchemaCacheS
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$deref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/deref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$translateTraits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js [app-client] (ecmascript)");
;
;
;
const anno = {
    it: Symbol.for("@smithy/nor-struct-it"),
    ns: Symbol.for("@smithy/ns")
};
const simpleSchemaCacheN = [];
const simpleSchemaCacheS = {};
class NormalizedSchema {
    static [Symbol.hasInstance](lhs) {
        const isPrototype = this.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
            const ns = lhs;
            return ns.symbol === this.symbol;
        }
        return isPrototype;
    }
    static of(ref) {
        const keyAble = typeof ref === "function" || typeof ref === "object" && ref !== null;
        if (typeof ref === "number") {
            if (simpleSchemaCacheN[ref]) {
                return simpleSchemaCacheN[ref];
            }
        } else if (typeof ref === "string") {
            if (simpleSchemaCacheS[ref]) {
                return simpleSchemaCacheS[ref];
            }
        } else if (keyAble) {
            if (ref[anno.ns]) {
                return ref[anno.ns];
            }
        }
        const sc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$deref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deref"])(ref);
        if (sc instanceof NormalizedSchema) {
            return sc;
        }
        if (isMemberSchema(sc)) {
            const [ns, traits] = sc;
            if (ns instanceof NormalizedSchema) {
                Object.assign(ns.getMergedTraits(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$translateTraits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateTraits"])(traits));
                return ns;
            }
            throw new Error("@smithy/core/schema - may not init unwrapped member schema=".concat(JSON.stringify(ref, null, 2), "."));
        }
        const ns = new NormalizedSchema(sc);
        if (keyAble) {
            return ref[anno.ns] = ns;
        }
        if (typeof sc === "string") {
            return simpleSchemaCacheS[sc] = ns;
        }
        if (typeof sc === "number") {
            return simpleSchemaCacheN[sc] = ns;
        }
        return ns;
    }
    getSchema() {
        const sc = this.schema;
        if (Array.isArray(sc) && sc[0] === 0) {
            return sc[4];
        }
        return sc;
    }
    getName() {
        let withNamespace = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        const { name } = this;
        const short = !withNamespace && name && name.includes("#");
        return short ? name.split("#")[1] : name || undefined;
    }
    getMemberName() {
        return this.memberName;
    }
    isMemberSchema() {
        return this._isMemberSchema;
    }
    isListSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" ? sc >= 64 && sc < 128 : sc[0] === 1;
    }
    isMapSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" ? sc >= 128 && sc <= 0b1111_1111 : sc[0] === 2;
    }
    isStructSchema() {
        const sc = this.getSchema();
        if (typeof sc !== "object") {
            return false;
        }
        const id = sc[0];
        return id === 3 || id === -3 || id === 4;
    }
    isUnionSchema() {
        const sc = this.getSchema();
        if (typeof sc !== "object") {
            return false;
        }
        return sc[0] === 4;
    }
    isBlobSchema() {
        const sc = this.getSchema();
        return sc === 21 || sc === 42;
    }
    isTimestampSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" && sc >= 4 && sc <= 7;
    }
    isUnitSchema() {
        return this.getSchema() === "unit";
    }
    isDocumentSchema() {
        return this.getSchema() === 15;
    }
    isStringSchema() {
        return this.getSchema() === 0;
    }
    isBooleanSchema() {
        return this.getSchema() === 2;
    }
    isNumericSchema() {
        return this.getSchema() === 1;
    }
    isBigIntegerSchema() {
        return this.getSchema() === 17;
    }
    isBigDecimalSchema() {
        return this.getSchema() === 19;
    }
    isStreaming() {
        const { streaming } = this.getMergedTraits();
        return !!streaming || this.getSchema() === 42;
    }
    isIdempotencyToken() {
        return !!this.getMergedTraits().idempotencyToken;
    }
    getMergedTraits() {
        var _this_normalizedTraits;
        return (_this_normalizedTraits = this.normalizedTraits) !== null && _this_normalizedTraits !== void 0 ? _this_normalizedTraits : this.normalizedTraits = {
            ...this.getOwnTraits(),
            ...this.getMemberTraits()
        };
    }
    getMemberTraits() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$translateTraits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateTraits"])(this.memberTraits);
    }
    getOwnTraits() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$translateTraits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateTraits"])(this.traits);
    }
    getKeySchema() {
        const [isDoc, isMap] = [
            this.isDocumentSchema(),
            this.isMapSchema()
        ];
        if (!isDoc && !isMap) {
            throw new Error("@smithy/core/schema - cannot get key for non-map: ".concat(this.getName(true)));
        }
        const schema = this.getSchema();
        var _schema_;
        const memberSchema = isDoc ? 15 : (_schema_ = schema[4]) !== null && _schema_ !== void 0 ? _schema_ : 0;
        return member([
            memberSchema,
            0
        ], "key");
    }
    getValueSchema() {
        const sc = this.getSchema();
        const [isDoc, isMap, isList] = [
            this.isDocumentSchema(),
            this.isMapSchema(),
            this.isListSchema()
        ];
        const memberSchema = typeof sc === "number" ? 0b0011_1111 & sc : sc && typeof sc === "object" && (isMap || isList) ? sc[3 + sc[0]] : isDoc ? 15 : void 0;
        if (memberSchema != null) {
            return member([
                memberSchema,
                0
            ], isMap ? "value" : "member");
        }
        throw new Error("@smithy/core/schema - ".concat(this.getName(true), " has no value member."));
    }
    getMemberSchema(memberName) {
        const struct = this.getSchema();
        if (this.isStructSchema() && struct[4].includes(memberName)) {
            const i = struct[4].indexOf(memberName);
            const memberSchema = struct[5][i];
            return member(isMemberSchema(memberSchema) ? memberSchema : [
                memberSchema,
                0
            ], memberName);
        }
        if (this.isDocumentSchema()) {
            return member([
                15,
                0
            ], memberName);
        }
        throw new Error("@smithy/core/schema - ".concat(this.getName(true), " has no member=").concat(memberName, "."));
    }
    getMemberSchemas() {
        const buffer = {};
        try {
            for (const [k, v] of this.structIterator()){
                buffer[k] = v;
            }
        } catch (ignored) {}
        return buffer;
    }
    getEventStreamMember() {
        if (this.isStructSchema()) {
            for (const [memberName, memberSchema] of this.structIterator()){
                if (memberSchema.isStreaming() && memberSchema.isStructSchema()) {
                    return memberName;
                }
            }
        }
        return "";
    }
    *structIterator() {
        if (this.isUnitSchema()) {
            return;
        }
        if (!this.isStructSchema()) {
            throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
        }
        const struct = this.getSchema();
        const z = struct[4].length;
        let it = struct[anno.it];
        if (it && z === it.length) {
            yield* it;
            return;
        }
        it = Array(z);
        for(let i = 0; i < z; ++i){
            const k = struct[4][i];
            const v = member([
                struct[5][i],
                0
            ], k);
            yield it[i] = [
                k,
                v
            ];
        }
        struct[anno.it] = it;
    }
    constructor(ref, memberName){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "ref", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "memberName", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "symbol", NormalizedSchema.symbol);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "schema", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_isMemberSchema", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "traits", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "memberTraits", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "normalizedTraits", void 0);
        this.ref = ref;
        this.memberName = memberName;
        const traitStack = [];
        let _ref = ref;
        let schema = ref;
        this._isMemberSchema = false;
        while(isMemberSchema(_ref)){
            traitStack.push(_ref[1]);
            _ref = _ref[0];
            schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$deref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deref"])(_ref);
            this._isMemberSchema = true;
        }
        if (traitStack.length > 0) {
            this.memberTraits = {};
            for(let i = traitStack.length - 1; i >= 0; --i){
                const traitSet = traitStack[i];
                Object.assign(this.memberTraits, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$translateTraits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateTraits"])(traitSet));
            }
        } else {
            this.memberTraits = 0;
        }
        if (schema instanceof NormalizedSchema) {
            const computedMemberTraits = this.memberTraits;
            Object.assign(this, schema);
            this.memberTraits = Object.assign({}, computedMemberTraits, schema.getMemberTraits(), this.getMemberTraits());
            this.normalizedTraits = void 0;
            this.memberName = memberName !== null && memberName !== void 0 ? memberName : schema.memberName;
            return;
        }
        this.schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$deref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deref"])(schema);
        if (isStaticSchema(this.schema)) {
            this.name = "".concat(this.schema[1], "#").concat(this.schema[2]);
            this.traits = this.schema[3];
        } else {
            var _this_memberName;
            this.name = (_this_memberName = this.memberName) !== null && _this_memberName !== void 0 ? _this_memberName : String(schema);
            this.traits = 0;
        }
        if (this._isMemberSchema && !memberName) {
            throw new Error("@smithy/core/schema - NormalizedSchema member init ".concat(this.getName(true), " missing member name."));
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(NormalizedSchema, "symbol", Symbol.for("@smithy/nor"));
function member(memberSchema, memberName) {
    if (memberSchema instanceof NormalizedSchema) {
        return Object.assign(memberSchema, {
            memberName,
            _isMemberSchema: true
        });
    }
    const internalCtorAccess = NormalizedSchema;
    return new internalCtorAccess(memberSchema, memberName);
}
const isMemberSchema = (sc)=>Array.isArray(sc) && sc.length === 2;
const isStaticSchema = (sc)=>Array.isArray(sc) && sc.length >= 5;
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "TypeRegistry": ()=>TypeRegistry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class TypeRegistry {
    static for(namespace) {
        if (!TypeRegistry.registries.has(namespace)) {
            TypeRegistry.registries.set(namespace, new TypeRegistry(namespace));
        }
        return TypeRegistry.registries.get(namespace);
    }
    copyFrom(other) {
        const { schemas, exceptions } = this;
        for (const [k, v] of other.schemas){
            if (!schemas.has(k)) {
                schemas.set(k, v);
            }
        }
        for (const [k, v] of other.exceptions){
            if (!exceptions.has(k)) {
                exceptions.set(k, v);
            }
        }
    }
    register(shapeId, schema) {
        const qualifiedName = this.normalizeShapeId(shapeId);
        for (const r of [
            this,
            TypeRegistry.for(qualifiedName.split("#")[0])
        ]){
            r.schemas.set(qualifiedName, schema);
        }
    }
    getSchema(shapeId) {
        const id = this.normalizeShapeId(shapeId);
        if (!this.schemas.has(id)) {
            throw new Error("@smithy/core/schema - schema not found for ".concat(id));
        }
        return this.schemas.get(id);
    }
    registerError(es, ctor) {
        const $error = es;
        const ns = $error[1];
        for (const r of [
            this,
            TypeRegistry.for(ns)
        ]){
            r.schemas.set(ns + "#" + $error[2], $error);
            r.exceptions.set($error, ctor);
        }
    }
    getErrorCtor(es) {
        const $error = es;
        if (this.exceptions.has($error)) {
            return this.exceptions.get($error);
        }
        const registry = TypeRegistry.for($error[1]);
        return registry.exceptions.get($error);
    }
    getBaseException() {
        for (const exceptionKey of this.exceptions.keys()){
            if (Array.isArray(exceptionKey)) {
                const [, ns, name] = exceptionKey;
                const id = ns + "#" + name;
                if (id.startsWith("smithy.ts.sdk.synthetic.") && id.endsWith("ServiceException")) {
                    return exceptionKey;
                }
            }
        }
        return undefined;
    }
    find(predicate) {
        return [
            ...this.schemas.values()
        ].find(predicate);
    }
    clear() {
        this.schemas.clear();
        this.exceptions.clear();
    }
    normalizeShapeId(shapeId) {
        if (shapeId.includes("#")) {
            return shapeId;
        }
        return this.namespace + "#" + shapeId;
    }
    constructor(namespace, schemas = new Map(), exceptions = new Map()){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "namespace", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "schemas", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "exceptions", void 0);
        this.namespace = namespace;
        this.schemas = schemas;
        this.exceptions = exceptions;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(TypeRegistry, "registries", new Map());
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "expectBoolean": ()=>expectBoolean,
    "expectByte": ()=>expectByte,
    "expectFloat32": ()=>expectFloat32,
    "expectInt": ()=>expectInt,
    "expectInt32": ()=>expectInt32,
    "expectLong": ()=>expectLong,
    "expectNonNull": ()=>expectNonNull,
    "expectNumber": ()=>expectNumber,
    "expectObject": ()=>expectObject,
    "expectShort": ()=>expectShort,
    "expectString": ()=>expectString,
    "expectUnion": ()=>expectUnion,
    "handleFloat": ()=>handleFloat,
    "limitedParseDouble": ()=>limitedParseDouble,
    "limitedParseFloat": ()=>limitedParseFloat,
    "limitedParseFloat32": ()=>limitedParseFloat32,
    "logger": ()=>logger,
    "parseBoolean": ()=>parseBoolean,
    "strictParseByte": ()=>strictParseByte,
    "strictParseDouble": ()=>strictParseDouble,
    "strictParseFloat": ()=>strictParseFloat,
    "strictParseFloat32": ()=>strictParseFloat32,
    "strictParseInt": ()=>strictParseInt,
    "strictParseInt32": ()=>strictParseInt32,
    "strictParseLong": ()=>strictParseLong,
    "strictParseShort": ()=>strictParseShort
});
const parseBoolean = (value)=>{
    switch(value){
        case "true":
            return true;
        case "false":
            return false;
        default:
            throw new Error('Unable to parse boolean value "'.concat(value, '"'));
    }
};
const expectBoolean = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "number") {
        if (value === 0 || value === 1) {
            logger.warn(stackTraceWarning("Expected boolean, got ".concat(typeof value, ": ").concat(value)));
        }
        if (value === 0) {
            return false;
        }
        if (value === 1) {
            return true;
        }
    }
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
            logger.warn(stackTraceWarning("Expected boolean, got ".concat(typeof value, ": ").concat(value)));
        }
        if (lower === "false") {
            return false;
        }
        if (lower === "true") {
            return true;
        }
    }
    if (typeof value === "boolean") {
        return value;
    }
    throw new TypeError("Expected boolean, got ".concat(typeof value, ": ").concat(value));
};
const expectNumber = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
                logger.warn(stackTraceWarning("Expected number but observed string: ".concat(value)));
            }
            return parsed;
        }
    }
    if (typeof value === "number") {
        return value;
    }
    throw new TypeError("Expected number, got ".concat(typeof value, ": ").concat(value));
};
const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
const expectFloat32 = (value)=>{
    const expected = expectNumber(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError("Expected 32-bit float, got ".concat(value));
        }
    }
    return expected;
};
const expectLong = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
    }
    throw new TypeError("Expected integer, got ".concat(typeof value, ": ").concat(value));
};
const expectInt = expectLong;
const expectInt32 = (value)=>expectSizedInt(value, 32);
const expectShort = (value)=>expectSizedInt(value, 16);
const expectByte = (value)=>expectSizedInt(value, 8);
const expectSizedInt = (value, size)=>{
    const expected = expectLong(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
        throw new TypeError("Expected ".concat(size, "-bit integer, got ").concat(value));
    }
    return expected;
};
const castInt = (value, size)=>{
    switch(size){
        case 32:
            return Int32Array.of(value)[0];
        case 16:
            return Int16Array.of(value)[0];
        case 8:
            return Int8Array.of(value)[0];
    }
};
const expectNonNull = (value, location)=>{
    if (value === null || value === undefined) {
        if (location) {
            throw new TypeError("Expected a non-null value for ".concat(location));
        }
        throw new TypeError("Expected a non-null value");
    }
    return value;
};
const expectObject = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
        return value;
    }
    const receivedType = Array.isArray(value) ? "array" : typeof value;
    throw new TypeError("Expected object, got ".concat(receivedType, ": ").concat(value));
};
const expectString = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return value;
    }
    if ([
        "boolean",
        "number",
        "bigint"
    ].includes(typeof value)) {
        logger.warn(stackTraceWarning("Expected string, got ".concat(typeof value, ": ").concat(value)));
        return String(value);
    }
    throw new TypeError("Expected string, got ".concat(typeof value, ": ").concat(value));
};
const expectUnion = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    const asObject = expectObject(value);
    const setKeys = Object.entries(asObject).filter((param)=>{
        let [, v] = param;
        return v != null;
    }).map((param)=>{
        let [k] = param;
        return k;
    });
    if (setKeys.length === 0) {
        throw new TypeError("Unions must have exactly one non-null member. None were found.");
    }
    if (setKeys.length > 1) {
        throw new TypeError("Unions must have exactly one non-null member. Keys ".concat(setKeys, " were not null."));
    }
    return asObject;
};
const strictParseDouble = (value)=>{
    if (typeof value == "string") {
        return expectNumber(parseNumber(value));
    }
    return expectNumber(value);
};
const strictParseFloat = strictParseDouble;
const strictParseFloat32 = (value)=>{
    if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
    }
    return expectFloat32(value);
};
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value)=>{
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
        throw new TypeError("Expected real number, got implicit NaN");
    }
    return parseFloat(value);
};
const limitedParseDouble = (value)=>{
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectNumber(value);
};
const handleFloat = limitedParseDouble;
const limitedParseFloat = limitedParseDouble;
const limitedParseFloat32 = (value)=>{
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectFloat32(value);
};
const parseFloatString = (value)=>{
    switch(value){
        case "NaN":
            return NaN;
        case "Infinity":
            return Infinity;
        case "-Infinity":
            return -Infinity;
        default:
            throw new Error("Unable to parse float value: ".concat(value));
    }
};
const strictParseLong = (value)=>{
    if (typeof value === "string") {
        return expectLong(parseNumber(value));
    }
    return expectLong(value);
};
const strictParseInt = strictParseLong;
const strictParseInt32 = (value)=>{
    if (typeof value === "string") {
        return expectInt32(parseNumber(value));
    }
    return expectInt32(value);
};
const strictParseShort = (value)=>{
    if (typeof value === "string") {
        return expectShort(parseNumber(value));
    }
    return expectShort(value);
};
const strictParseByte = (value)=>{
    if (typeof value === "string") {
        return expectByte(parseNumber(value));
    }
    return expectByte(value);
};
const stackTraceWarning = (message)=>{
    return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s)=>!s.includes("stackTraceWarning")).join("\n");
};
const logger = {
    warn: console.warn
};
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "dateToUtcString": ()=>dateToUtcString,
    "parseEpochTimestamp": ()=>parseEpochTimestamp,
    "parseRfc3339DateTime": ()=>parseRfc3339DateTime,
    "parseRfc3339DateTimeWithOffset": ()=>parseRfc3339DateTimeWithOffset,
    "parseRfc7231DateTime": ()=>parseRfc7231DateTime
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$parse$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js [app-client] (ecmascript)");
;
const DAYS = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function dateToUtcString(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const dayOfWeek = date.getUTCDay();
    const dayOfMonthInt = date.getUTCDate();
    const hoursInt = date.getUTCHours();
    const minutesInt = date.getUTCMinutes();
    const secondsInt = date.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? "0".concat(dayOfMonthInt) : "".concat(dayOfMonthInt);
    const hoursString = hoursInt < 10 ? "0".concat(hoursInt) : "".concat(hoursInt);
    const minutesString = minutesInt < 10 ? "0".concat(minutesInt) : "".concat(minutesInt);
    const secondsString = secondsInt < 10 ? "0".concat(secondsInt) : "".concat(secondsInt);
    return "".concat(DAYS[dayOfWeek], ", ").concat(dayOfMonthString, " ").concat(MONTHS[month], " ").concat(year, " ").concat(hoursString, ":").concat(minutesString, ":").concat(secondsString, " GMT");
}
const RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
const parseRfc3339DateTime = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$parse$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictParseShort"])(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    return buildDate(year, month, day, {
        hours,
        minutes,
        seconds,
        fractionalMilliseconds
    });
};
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
const parseRfc3339DateTimeWithOffset = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339_WITH_OFFSET.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$parse$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictParseShort"])(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    const date = buildDate(year, month, day, {
        hours,
        minutes,
        seconds,
        fractionalMilliseconds
    });
    if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
    }
    return date;
};
const IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
const parseRfc7231DateTime = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$parse$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictParseShort"])(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds
        });
    }
    match = RFC_850_DATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds
        }));
    }
    match = ASC_TIME.exec(value);
    if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$parse$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictParseShort"])(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds
        });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
};
const parseEpochTimestamp = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    let valueAsDouble;
    if (typeof value === "number") {
        valueAsDouble = value;
    } else if (typeof value === "string") {
        valueAsDouble = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$parse$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictParseDouble"])(value);
    } else if (typeof value === "object" && value.tag === 1) {
        valueAsDouble = value.value;
    } else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    }
    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    }
    return new Date(Math.round(valueAsDouble * 1000));
};
const buildDate = (year, month, day, time)=>{
    const adjustedMonth = month - 1;
    validateDayOfMonth(year, adjustedMonth, day);
    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
const parseTwoDigitYear = (value)=>{
    const thisYear = new Date().getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$parse$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictParseShort"])(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
    }
    return valueInThisCentury;
};
const FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1000;
const adjustRfc850Year = (input)=>{
    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
};
const parseMonthByShortName = (value)=>{
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
        throw new TypeError("Invalid month: ".concat(value));
    }
    return monthIdx + 1;
};
const DAYS_IN_MONTH = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
const validateDayOfMonth = (year, month, day)=>{
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
    }
    if (day > maxDays) {
        throw new TypeError("Invalid day for ".concat(MONTHS[month], " in ").concat(year, ": ").concat(day));
    }
};
const isLeapYear = (year)=>{
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
const parseDateValue = (value, type, lower, upper)=>{
    const dateVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$parse$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictParseByte"])(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
        throw new TypeError("".concat(type, " must be between ").concat(lower, " and ").concat(upper, ", inclusive"));
    }
    return dateVal;
};
const parseMilliseconds = (value)=>{
    if (value === null || value === undefined) {
        return 0;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$parse$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictParseFloat32"])("0." + value) * 1000;
};
const parseOffsetToMilliseconds = (value)=>{
    const directionStr = value[0];
    let direction = 1;
    if (directionStr == "+") {
        direction = 1;
    } else if (directionStr == "-") {
        direction = -1;
    } else {
        throw new TypeError("Offset direction, ".concat(directionStr, ', must be "+" or "-"'));
    }
    const hour = Number(value.substring(1, 3));
    const minute = Number(value.substring(4, 6));
    return direction * (hour * 60 + minute) * 60 * 1000;
};
const stripLeadingZeroes = (value)=>{
    let idx = 0;
    while(idx < value.length - 1 && value.charAt(idx) === "0"){
        idx++;
    }
    if (idx === 0) {
        return value;
    }
    return value.slice(idx);
};
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "httpSigningMiddleware": ()=>httpSigningMiddleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$protocol$2d$http$40$5$2e$3$2e$12$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+protocol-http@5.3.12/node_modules/@smithy/protocol-http/dist-es/httpRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$middleware$40$4$2e$2$2e$12$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-middleware@4.2.12/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js [app-client] (ecmascript)");
;
;
const defaultErrorHandler = (signingProperties)=>(error)=>{
        throw error;
    };
const defaultSuccessHandler = (httpResponse, signingProperties)=>{};
const httpSigningMiddleware = (config)=>(next, context)=>async (args)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$protocol$2d$http$40$5$2e$3$2e$12$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpRequest"].isInstance(args.request)) {
                return next(args);
            }
            const smithyContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$middleware$40$4$2e$2$2e$12$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmithyContext"])(context);
            const scheme = smithyContext.selectedHttpAuthScheme;
            if (!scheme) {
                throw new Error("No HttpAuthScheme was selected: unable to sign request");
            }
            const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
            const output = await next({
                ...args,
                request: await signer.sign(args.request, identity, signingProperties)
            }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
            (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
            return output;
        };
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getHttpSigningPlugin": ()=>getHttpSigningPlugin,
    "httpSigningMiddlewareOptions": ()=>httpSigningMiddlewareOptions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$signing$2f$httpSigningMiddleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js [app-client] (ecmascript)");
;
const httpSigningMiddlewareOptions = {
    step: "finalizeRequest",
    tags: [
        "HTTP_SIGNING"
    ],
    name: "httpSigningMiddleware",
    aliases: [
        "apiKeyMiddleware",
        "tokenMiddleware",
        "awsAuthMiddleware"
    ],
    override: true,
    relation: "after",
    toMiddleware: "retryMiddleware"
};
const getHttpSigningPlugin = (config)=>({
        applyToStack: (clientStack)=>{
            clientStack.addRelativeTo((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$signing$2f$httpSigningMiddleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpSigningMiddleware"])(config), httpSigningMiddlewareOptions);
        }
    });
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/normalizeProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "normalizeProvider": ()=>normalizeProvider
});
const normalizeProvider = (input)=>{
    if (typeof input === "function") return input;
    const promisified = Promise.resolve(input);
    return ()=>promisified;
};
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DefaultIdentityProviderConfig": ()=>DefaultIdentityProviderConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class DefaultIdentityProviderConfig {
    getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
    }
    constructor(config){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "authSchemes", new Map());
        for (const [key, value] of Object.entries(config)){
            if (value !== undefined) {
                this.authSchemes.set(key, value);
            }
        }
    }
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "resolveAuthOptions": ()=>resolveAuthOptions
});
const resolveAuthOptions = (candidateAuthOptions, authSchemePreference)=>{
    if (!authSchemePreference || authSchemePreference.length === 0) {
        return candidateAuthOptions;
    }
    const preferredAuthOptions = [];
    for (const preferredSchemeName of authSchemePreference){
        for (const candidateAuthOption of candidateAuthOptions){
            const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
            if (candidateAuthSchemeName === preferredSchemeName) {
                preferredAuthOptions.push(candidateAuthOption);
            }
        }
    }
    for (const candidateAuthOption of candidateAuthOptions){
        if (!preferredAuthOptions.find((param)=>{
            let { schemeId } = param;
            return schemeId === candidateAuthOption.schemeId;
        })) {
            preferredAuthOptions.push(candidateAuthOption);
        }
    }
    return preferredAuthOptions;
};
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "httpAuthSchemeMiddleware": ()=>httpAuthSchemeMiddleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$middleware$40$4$2e$2$2e$12$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-middleware@4.2.12/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$auth$2d$scheme$2f$resolveAuthOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js [app-client] (ecmascript)");
;
;
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
    const map = new Map();
    for (const scheme of httpAuthSchemes){
        map.set(scheme.schemeId, scheme);
    }
    return map;
}
const httpAuthSchemeMiddleware = (config, mwOptions)=>(next, context)=>async (args)=>{
            const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
            const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
            const resolvedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$auth$2d$scheme$2f$resolveAuthOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthOptions"])(options, authSchemePreference);
            const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
            const smithyContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$middleware$40$4$2e$2$2e$12$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmithyContext"])(context);
            const failureReasons = [];
            for (const option of resolvedOptions){
                var _option_propertiesExtractor;
                const scheme = authSchemes.get(option.schemeId);
                if (!scheme) {
                    failureReasons.push("HttpAuthScheme `".concat(option.schemeId, "` was not enabled for this service."));
                    continue;
                }
                const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
                if (!identityProvider) {
                    failureReasons.push("HttpAuthScheme `".concat(option.schemeId, "` did not have an IdentityProvider configured."));
                    continue;
                }
                const { identityProperties = {}, signingProperties = {} } = ((_option_propertiesExtractor = option.propertiesExtractor) === null || _option_propertiesExtractor === void 0 ? void 0 : _option_propertiesExtractor.call(option, config, context)) || {};
                option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
                option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
                smithyContext.selectedHttpAuthScheme = {
                    httpAuthOption: option,
                    identity: await identityProvider(option.identityProperties),
                    signer: scheme.signer
                };
                break;
            }
            if (!smithyContext.selectedHttpAuthScheme) {
                throw new Error(failureReasons.join("\n"));
            }
            return next(args);
        };
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getHttpAuthSchemeEndpointRuleSetPlugin": ()=>getHttpAuthSchemeEndpointRuleSetPlugin,
    "httpAuthSchemeEndpointRuleSetMiddlewareOptions": ()=>httpAuthSchemeEndpointRuleSetMiddlewareOptions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$auth$2d$scheme$2f$httpAuthSchemeMiddleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js [app-client] (ecmascript)");
;
const httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
    step: "serialize",
    tags: [
        "HTTP_AUTH_SCHEME"
    ],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "endpointV2Middleware"
};
const getHttpAuthSchemeEndpointRuleSetPlugin = (config, param)=>{
    let { httpAuthSchemeParametersProvider, identityProviderConfigProvider } = param;
    return {
        applyToStack: (clientStack)=>{
            clientStack.addRelativeTo((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$auth$2d$scheme$2f$httpAuthSchemeMiddleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpAuthSchemeMiddleware"])(config, {
                httpAuthSchemeParametersProvider,
                identityProviderConfigProvider
            }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
        }
    };
};
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "operation": ()=>operation
});
const operation = (namespace, name, traits, input, output)=>({
        name,
        namespace,
        traits,
        input,
        output
    });
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "schemaDeserializationMiddleware": ()=>schemaDeserializationMiddleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$protocol$2d$http$40$5$2e$3$2e$12$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpResponse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+protocol-http@5.3.12/node_modules/@smithy/protocol-http/dist-es/httpResponse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$middleware$40$4$2e$2$2e$12$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-middleware@4.2.12/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js [app-client] (ecmascript)");
;
;
;
const schemaDeserializationMiddleware = (config)=>(next, context)=>async (args)=>{
            const { response } = await next(args);
            const { operationSchema } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$middleware$40$4$2e$2$2e$12$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmithyContext"])(context);
            const [, ns, n, t, i, o] = operationSchema !== null && operationSchema !== void 0 ? operationSchema : [];
            try {
                const parsed = await config.protocol.deserializeResponse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operation"])(ns, n, t, i, o), {
                    ...config,
                    ...context
                }, response);
                return {
                    response,
                    output: parsed
                };
            } catch (error) {
                Object.defineProperty(error, "$response", {
                    value: response,
                    enumerable: false,
                    writable: false,
                    configurable: false
                });
                if (!("$metadata" in error)) {
                    const hint = "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
                    try {
                        error.message += "\n  " + hint;
                    } catch (e) {
                        var _context_logger_constructor, _context_logger;
                        if (!context.logger || ((_context_logger = context.logger) === null || _context_logger === void 0 ? void 0 : (_context_logger_constructor = _context_logger.constructor) === null || _context_logger_constructor === void 0 ? void 0 : _context_logger_constructor.name) === "NoOpLogger") {
                            console.warn(hint);
                        } else {
                            var _context_logger_warn, _context_logger1;
                            (_context_logger1 = context.logger) === null || _context_logger1 === void 0 ? void 0 : (_context_logger_warn = _context_logger1.warn) === null || _context_logger_warn === void 0 ? void 0 : _context_logger_warn.call(_context_logger1, hint);
                        }
                    }
                    if (typeof error.$responseBodyText !== "undefined") {
                        if (error.$response) {
                            error.$response.body = error.$responseBodyText;
                        }
                    }
                    try {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$protocol$2d$http$40$5$2e$3$2e$12$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpResponse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpResponse"].isInstance(response)) {
                            const { headers = {} } = response;
                            const headerEntries = Object.entries(headers);
                            error.$metadata = {
                                httpStatusCode: response.statusCode,
                                requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
                                extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
                                cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
                            };
                        }
                    } catch (e) {}
                }
                throw error;
            }
        };
const findHeader = (pattern, headers)=>{
    return (headers.find((param)=>{
        let [k] = param;
        return k.match(pattern);
    }) || [
        void 0,
        void 1
    ])[1];
};
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "schemaSerializationMiddleware": ()=>schemaSerializationMiddleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$toEndpointV1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/endpoints/toEndpointV1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$middleware$40$4$2e$2$2e$12$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-middleware@4.2.12/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js [app-client] (ecmascript)");
;
;
;
const schemaSerializationMiddleware = (config)=>(next, context)=>async (args)=>{
            const { operationSchema } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$middleware$40$4$2e$2$2e$12$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmithyContext"])(context);
            const [, ns, n, t, i, o] = operationSchema !== null && operationSchema !== void 0 ? operationSchema : [];
            const endpoint = context.endpointV2 ? async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$toEndpointV1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toEndpointV1"])(context.endpointV2) : config.endpoint;
            const request = await config.protocol.serializeRequest((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operation"])(ns, n, t, i, o), args.input, {
                ...config,
                ...context,
                endpoint
            });
            return next({
                ...args,
                request
            });
        };
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "deserializerMiddlewareOption": ()=>deserializerMiddlewareOption,
    "getSchemaSerdePlugin": ()=>getSchemaSerdePlugin,
    "serializerMiddlewareOption": ()=>serializerMiddlewareOption
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$middleware$2f$schemaDeserializationMiddleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$middleware$2f$schemaSerializationMiddleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js [app-client] (ecmascript)");
;
;
const deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: [
        "DESERIALIZER"
    ],
    override: true
};
const serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: [
        "SERIALIZER"
    ],
    override: true
};
function getSchemaSerdePlugin(config) {
    return {
        applyToStack: (commandStack)=>{
            commandStack.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$middleware$2f$schemaSerializationMiddleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemaSerializationMiddleware"])(config), serializerMiddlewareOption);
            commandStack.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$middleware$2f$schemaDeserializationMiddleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemaDeserializationMiddleware"])(config), deserializerMiddlewareOption);
            config.protocol.setSerdeContext(config);
        }
    };
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "EXPIRATION_MS": ()=>EXPIRATION_MS,
    "createIsIdentityExpiredFunction": ()=>createIsIdentityExpiredFunction,
    "doesIdentityRequireRefresh": ()=>doesIdentityRequireRefresh,
    "isIdentityExpired": ()=>isIdentityExpired,
    "memoizeIdentityProvider": ()=>memoizeIdentityProvider
});
const createIsIdentityExpiredFunction = (expirationMs)=>function isIdentityExpired(identity) {
        return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
    };
const EXPIRATION_MS = 300_000;
const isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
const doesIdentityRequireRefresh = (identity)=>identity.expiration !== undefined;
const memoizeIdentityProvider = (provider, isExpired, requiresRefresh)=>{
    if (provider === undefined) {
        return undefined;
    }
    const normalizedProvider = typeof provider !== "function" ? async ()=>Promise.resolve(provider) : provider;
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async (options)=>{
        if (!pending) {
            pending = normalizedProvider(options);
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        } finally{
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options)=>{
            if (!hasResult || (options === null || options === void 0 ? void 0 : options.forceRefresh)) {
                resolved = await coalesceProvider(options);
            }
            return resolved;
        };
    }
    return async (options)=>{
        if (!hasResult || (options === null || options === void 0 ? void 0 : options.forceRefresh)) {
            resolved = await coalesceProvider(options);
        }
        if (isConstant) {
            return resolved;
        }
        if (!requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider(options);
            return resolved;
        }
        return resolved;
    };
};
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/split-every.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "splitEvery": ()=>splitEvery
});
function splitEvery(value, delimiter, numDelimiters) {
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
        throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    const segments = value.split(delimiter);
    if (numDelimiters === 1) {
        return segments;
    }
    const compoundSegments = [];
    let currentSegment = "";
    for(let i = 0; i < segments.length; i++){
        if (currentSegment === "") {
            currentSegment = segments[i];
        } else {
            currentSegment += delimiter + segments[i];
        }
        if ((i + 1) % numDelimiters === 0) {
            compoundSegments.push(currentSegment);
            currentSegment = "";
        }
    }
    if (currentSegment !== "") {
        compoundSegments.push(currentSegment);
    }
    return compoundSegments;
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/split-header.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "splitHeader": ()=>splitHeader
});
const splitHeader = (value)=>{
    const z = value.length;
    const values = [];
    let withinQuotes = false;
    let prevChar = undefined;
    let anchor = 0;
    for(let i = 0; i < z; ++i){
        const char = value[i];
        switch(char){
            case '"':
                if (prevChar !== "\\") {
                    withinQuotes = !withinQuotes;
                }
                break;
            case ",":
                if (!withinQuotes) {
                    values.push(value.slice(anchor, i));
                    anchor = i + 1;
                }
                break;
            default:
        }
        prevChar = char;
    }
    values.push(value.slice(anchor));
    return values.map((v)=>{
        v = v.trim();
        const z = v.length;
        if (z < 2) {
            return v;
        }
        if (v[0] === '"' && v[z - 1] === '"') {
            v = v.slice(1, z - 1);
        }
        return v.replace(/\\"/g, '"');
    });
};
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "collectBody": ()=>collectBody
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$stream$40$4$2e$5$2e$19$2f$node_modules$2f40$smithy$2f$util$2d$stream$2f$dist$2d$es$2f$blob$2f$Uint8ArrayBlobAdapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-stream@4.5.19/node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js [app-client] (ecmascript)");
;
const collectBody = async function() {
    let streamBody = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Uint8Array(), context = arguments.length > 1 ? arguments[1] : void 0;
    if (streamBody instanceof Uint8Array) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$stream$40$4$2e$5$2e$19$2f$node_modules$2f40$smithy$2f$util$2d$stream$2f$dist$2d$es$2f$blob$2f$Uint8ArrayBlobAdapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uint8ArrayBlobAdapter"].mutate(streamBody);
    }
    if (!streamBody) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$stream$40$4$2e$5$2e$19$2f$node_modules$2f40$smithy$2f$util$2d$stream$2f$dist$2d$es$2f$blob$2f$Uint8ArrayBlobAdapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uint8ArrayBlobAdapter"].mutate(new Uint8Array());
    }
    const fromContext = context.streamCollector(streamBody);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$stream$40$4$2e$5$2e$19$2f$node_modules$2f40$smithy$2f$util$2d$stream$2f$dist$2d$es$2f$blob$2f$Uint8ArrayBlobAdapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uint8ArrayBlobAdapter"].mutate(await fromContext);
};
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "extendedEncodeURIComponent": ()=>extendedEncodeURIComponent
});
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SerdeContext": ()=>SerdeContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class SerdeContext {
    setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "serdeContext", void 0);
    }
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "HttpProtocol": ()=>HttpProtocol
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$translateTraits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$protocol$2d$http$40$5$2e$3$2e$12$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+protocol-http@5.3.12/node_modules/@smithy/protocol-http/dist-es/httpRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$protocol$2d$http$40$5$2e$3$2e$12$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpResponse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+protocol-http@5.3.12/node_modules/@smithy/protocol-http/dist-es/httpResponse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$SerdeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js [app-client] (ecmascript)");
;
;
;
;
class HttpProtocol extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$SerdeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerdeContext"] {
    getRequestType() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$protocol$2d$http$40$5$2e$3$2e$12$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpRequest"];
    }
    getResponseType() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$protocol$2d$http$40$5$2e$3$2e$12$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpResponse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpResponse"];
    }
    setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
        if (this.getPayloadCodec()) {
            this.getPayloadCodec().setSerdeContext(serdeContext);
        }
    }
    updateServiceEndpoint(request, endpoint) {
        if ("url" in endpoint) {
            request.protocol = endpoint.url.protocol;
            request.hostname = endpoint.url.hostname;
            request.port = endpoint.url.port ? Number(endpoint.url.port) : undefined;
            request.path = endpoint.url.pathname;
            request.fragment = endpoint.url.hash || void 0;
            request.username = endpoint.url.username || void 0;
            request.password = endpoint.url.password || void 0;
            if (!request.query) {
                request.query = {};
            }
            for (const [k, v] of endpoint.url.searchParams.entries()){
                request.query[k] = v;
            }
            if (endpoint.headers) {
                for (const [name, values] of Object.entries(endpoint.headers)){
                    request.headers[name] = values.join(", ");
                }
            }
            return request;
        } else {
            request.protocol = endpoint.protocol;
            request.hostname = endpoint.hostname;
            request.port = endpoint.port ? Number(endpoint.port) : undefined;
            request.path = endpoint.path;
            request.query = {
                ...endpoint.query
            };
            if (endpoint.headers) {
                for (const [name, value] of Object.entries(endpoint.headers)){
                    request.headers[name] = value;
                }
            }
            return request;
        }
    }
    setHostPrefix(request, operationSchema, input) {
        var _this_serdeContext;
        if ((_this_serdeContext = this.serdeContext) === null || _this_serdeContext === void 0 ? void 0 : _this_serdeContext.disableHostPrefix) {
            return;
        }
        const inputNs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(operationSchema.input);
        var _operationSchema_traits;
        const opTraits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$translateTraits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateTraits"])((_operationSchema_traits = operationSchema.traits) !== null && _operationSchema_traits !== void 0 ? _operationSchema_traits : {});
        if (opTraits.endpoint) {
            var _opTraits_endpoint;
            let hostPrefix = (_opTraits_endpoint = opTraits.endpoint) === null || _opTraits_endpoint === void 0 ? void 0 : _opTraits_endpoint[0];
            if (typeof hostPrefix === "string") {
                const hostLabelInputs = [
                    ...inputNs.structIterator()
                ].filter((param)=>{
                    let [, member] = param;
                    return member.getMergedTraits().hostLabel;
                });
                for (const [name] of hostLabelInputs){
                    const replacement = input[name];
                    if (typeof replacement !== "string") {
                        throw new Error("@smithy/core/schema - ".concat(name, " in input must be a string as hostLabel."));
                    }
                    hostPrefix = hostPrefix.replace("{".concat(name, "}"), replacement);
                }
                request.hostname = hostPrefix + request.hostname;
            }
        }
    }
    deserializeMetadata(output) {
        var _output_headers_xamznrequestid, _ref;
        return {
            httpStatusCode: output.statusCode,
            requestId: (_ref = (_output_headers_xamznrequestid = output.headers["x-amzn-requestid"]) !== null && _output_headers_xamznrequestid !== void 0 ? _output_headers_xamznrequestid : output.headers["x-amzn-request-id"]) !== null && _ref !== void 0 ? _ref : output.headers["x-amz-request-id"],
            extendedRequestId: output.headers["x-amz-id-2"],
            cfId: output.headers["x-amz-cf-id"]
        };
    }
    async serializeEventStream(param) {
        let { eventStream, requestSchema, initialRequest } = param;
        const eventStreamSerde = await this.loadEventStreamCapability();
        return eventStreamSerde.serializeEventStream({
            eventStream,
            requestSchema,
            initialRequest
        });
    }
    async deserializeEventStream(param) {
        let { response, responseSchema, initialResponseContainer } = param;
        const eventStreamSerde = await this.loadEventStreamCapability();
        return eventStreamSerde.deserializeEventStream({
            response,
            responseSchema,
            initialResponseContainer
        });
    }
    async loadEventStreamCapability() {
        const { EventStreamSerde } = await __turbopack_context__.r("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
        return new EventStreamSerde({
            marshaller: this.getEventStreamMarshaller(),
            serializer: this.serializer,
            deserializer: this.deserializer,
            serdeContext: this.serdeContext,
            defaultContentType: this.getDefaultContentType()
        });
    }
    getDefaultContentType() {
        throw new Error("@smithy/core/protocols - ".concat(this.constructor.name, " getDefaultContentType() implementation missing."));
    }
    async deserializeHttpMessage(schema, context, response, arg4, arg5) {
        void schema;
        void context;
        void response;
        void arg4;
        void arg5;
        return [];
    }
    getEventStreamMarshaller() {
        const context = this.serdeContext;
        if (!context.eventStreamMarshaller) {
            throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
        }
        return context.eventStreamMarshaller;
    }
    constructor(options){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "options", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "compositeErrorRegistry", void 0);
        this.options = options;
        this.compositeErrorRegistry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeRegistry"].for(options.defaultNamespace);
        var _options_errorTypeRegistries;
        for (const etr of (_options_errorTypeRegistries = options.errorTypeRegistries) !== null && _options_errorTypeRegistries !== void 0 ? _options_errorTypeRegistries : []){
            this.compositeErrorRegistry.copyFrom(etr);
        }
    }
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "HttpBindingProtocol": ()=>HttpBindingProtocol
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$translateTraits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$split$2d$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/split-every.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$split$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/split-header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$protocol$2d$http$40$5$2e$3$2e$12$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+protocol-http@5.3.12/node_modules/@smithy/protocol-http/dist-es/httpRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$stream$40$4$2e$5$2e$19$2f$node_modules$2f40$smithy$2f$util$2d$stream$2f$dist$2d$es$2f$sdk$2d$stream$2d$mixin$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-stream@4.5.19/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$collect$2d$stream$2d$body$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$extended$2d$encode$2d$uri$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$HttpProtocol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class HttpBindingProtocol extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$HttpProtocol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpProtocol"] {
    async serializeRequest(operationSchema, _input, context) {
        const input = {
            ..._input !== null && _input !== void 0 ? _input : {}
        };
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(operationSchema === null || operationSchema === void 0 ? void 0 : operationSchema.input);
        const payloadMemberNames = [];
        const payloadMemberSchemas = [];
        let hasNonHttpBindingMember = false;
        let payload;
        const request = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$protocol$2d$http$40$5$2e$3$2e$12$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpRequest"]({
            protocol: "",
            hostname: "",
            port: undefined,
            path: "",
            fragment: undefined,
            query: query,
            headers: headers,
            body: undefined
        });
        if (endpoint) {
            this.updateServiceEndpoint(request, endpoint);
            this.setHostPrefix(request, operationSchema, input);
            const opTraits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$translateTraits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateTraits"])(operationSchema.traits);
            if (opTraits.http) {
                request.method = opTraits.http[0];
                const [path, search] = opTraits.http[1].split("?");
                if (request.path == "/") {
                    request.path = path;
                } else {
                    request.path += path;
                }
                const traitSearchParams = new URLSearchParams(search !== null && search !== void 0 ? search : "");
                Object.assign(query, Object.fromEntries(traitSearchParams));
            }
        }
        for (const [memberName, memberNs] of ns.structIterator()){
            var _memberNs_getMergedTraits;
            const memberTraits = (_memberNs_getMergedTraits = memberNs.getMergedTraits()) !== null && _memberNs_getMergedTraits !== void 0 ? _memberNs_getMergedTraits : {};
            const inputMemberValue = input[memberName];
            if (inputMemberValue == null && !memberNs.isIdempotencyToken()) {
                if (memberTraits.httpLabel) {
                    if (request.path.includes("{".concat(memberName, "+}")) || request.path.includes("{".concat(memberName, "}"))) {
                        throw new Error("No value provided for input HTTP label: ".concat(memberName, "."));
                    }
                }
                continue;
            }
            if (memberTraits.httpPayload) {
                const isStreaming = memberNs.isStreaming();
                if (isStreaming) {
                    const isEventStream = memberNs.isStructSchema();
                    if (isEventStream) {
                        if (input[memberName]) {
                            payload = await this.serializeEventStream({
                                eventStream: input[memberName],
                                requestSchema: ns
                            });
                        }
                    } else {
                        payload = inputMemberValue;
                    }
                } else {
                    serializer.write(memberNs, inputMemberValue);
                    payload = serializer.flush();
                }
                delete input[memberName];
            } else if (memberTraits.httpLabel) {
                serializer.write(memberNs, inputMemberValue);
                const replacement = serializer.flush();
                if (request.path.includes("{".concat(memberName, "+}"))) {
                    request.path = request.path.replace("{".concat(memberName, "+}"), replacement.split("/").map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$extended$2d$encode$2d$uri$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendedEncodeURIComponent"]).join("/"));
                } else if (request.path.includes("{".concat(memberName, "}"))) {
                    request.path = request.path.replace("{".concat(memberName, "}"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$extended$2d$encode$2d$uri$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendedEncodeURIComponent"])(replacement));
                }
                delete input[memberName];
            } else if (memberTraits.httpHeader) {
                serializer.write(memberNs, inputMemberValue);
                headers[memberTraits.httpHeader.toLowerCase()] = String(serializer.flush());
                delete input[memberName];
            } else if (typeof memberTraits.httpPrefixHeaders === "string") {
                for (const [key, val] of Object.entries(inputMemberValue)){
                    const amalgam = memberTraits.httpPrefixHeaders + key;
                    serializer.write([
                        memberNs.getValueSchema(),
                        {
                            httpHeader: amalgam
                        }
                    ], val);
                    headers[amalgam.toLowerCase()] = serializer.flush();
                }
                delete input[memberName];
            } else if (memberTraits.httpQuery || memberTraits.httpQueryParams) {
                this.serializeQuery(memberNs, inputMemberValue, query);
                delete input[memberName];
            } else {
                hasNonHttpBindingMember = true;
                payloadMemberNames.push(memberName);
                payloadMemberSchemas.push(memberNs);
            }
        }
        if (hasNonHttpBindingMember && input) {
            var _ns_getName;
            const [namespace, name] = ((_ns_getName = ns.getName(true)) !== null && _ns_getName !== void 0 ? _ns_getName : "#Unknown").split("#");
            const requiredMembers = ns.getSchema()[6];
            const payloadSchema = [
                3,
                namespace,
                name,
                ns.getMergedTraits(),
                payloadMemberNames,
                payloadMemberSchemas,
                undefined
            ];
            if (requiredMembers) {
                payloadSchema[6] = requiredMembers;
            } else {
                payloadSchema.pop();
            }
            serializer.write(payloadSchema, input);
            payload = serializer.flush();
        }
        request.headers = headers;
        request.query = query;
        request.body = payload;
        return request;
    }
    serializeQuery(ns, data, query) {
        const serializer = this.serializer;
        const traits = ns.getMergedTraits();
        if (traits.httpQueryParams) {
            for (const [key, val] of Object.entries(data)){
                if (!(key in query)) {
                    const valueSchema = ns.getValueSchema();
                    Object.assign(valueSchema.getMergedTraits(), {
                        ...traits,
                        httpQuery: key,
                        httpQueryParams: undefined
                    });
                    this.serializeQuery(valueSchema, val, query);
                }
            }
            return;
        }
        if (ns.isListSchema()) {
            const sparse = !!ns.getMergedTraits().sparse;
            const buffer = [];
            for (const item of data){
                serializer.write([
                    ns.getValueSchema(),
                    traits
                ], item);
                const serializable = serializer.flush();
                if (sparse || serializable !== undefined) {
                    buffer.push(serializable);
                }
            }
            query[traits.httpQuery] = buffer;
        } else {
            serializer.write([
                ns,
                traits
            ], data);
            query[traits.httpQuery] = serializer.flush();
        }
    }
    async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
            const bytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$collect$2d$stream$2d$body$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectBody"])(response.body, context);
            if (bytes.byteLength > 0) {
                Object.assign(dataObject, await deserializer.read(15, bytes));
            }
            await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
            throw new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
        }
        for(const header in response.headers){
            const value = response.headers[header];
            delete response.headers[header];
            response.headers[header.toLowerCase()] = value;
        }
        const nonHttpBindingMembers = await this.deserializeHttpMessage(ns, context, response, dataObject);
        if (nonHttpBindingMembers.length) {
            const bytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$collect$2d$stream$2d$body$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectBody"])(response.body, context);
            if (bytes.byteLength > 0) {
                const dataFromBody = await deserializer.read(ns, bytes);
                for (const member of nonHttpBindingMembers){
                    if (dataFromBody[member] != null) {
                        dataObject[member] = dataFromBody[member];
                    }
                }
            }
        } else if (nonHttpBindingMembers.discardResponseBody) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$collect$2d$stream$2d$body$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectBody"])(response.body, context);
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
    }
    async deserializeHttpMessage(schema, context, response, arg4, arg5) {
        let dataObject;
        if (arg4 instanceof Set) {
            dataObject = arg5;
        } else {
            dataObject = arg4;
        }
        let discardResponseBody = true;
        const deserializer = this.deserializer;
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(schema);
        const nonHttpBindingMembers = [];
        for (const [memberName, memberSchema] of ns.structIterator()){
            const memberTraits = memberSchema.getMemberTraits();
            if (memberTraits.httpPayload) {
                discardResponseBody = false;
                const isStreaming = memberSchema.isStreaming();
                if (isStreaming) {
                    const isEventStream = memberSchema.isStructSchema();
                    if (isEventStream) {
                        dataObject[memberName] = await this.deserializeEventStream({
                            response,
                            responseSchema: ns
                        });
                    } else {
                        dataObject[memberName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$stream$40$4$2e$5$2e$19$2f$node_modules$2f40$smithy$2f$util$2d$stream$2f$dist$2d$es$2f$sdk$2d$stream$2d$mixin$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdkStreamMixin"])(response.body);
                    }
                } else if (response.body) {
                    const bytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$collect$2d$stream$2d$body$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectBody"])(response.body, context);
                    if (bytes.byteLength > 0) {
                        dataObject[memberName] = await deserializer.read(memberSchema, bytes);
                    }
                }
            } else if (memberTraits.httpHeader) {
                const key = String(memberTraits.httpHeader).toLowerCase();
                const value = response.headers[key];
                if (null != value) {
                    if (memberSchema.isListSchema()) {
                        const headerListValueSchema = memberSchema.getValueSchema();
                        headerListValueSchema.getMergedTraits().httpHeader = key;
                        let sections;
                        if (headerListValueSchema.isTimestampSchema() && headerListValueSchema.getSchema() === 4) {
                            sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$split$2d$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitEvery"])(value, ",", 2);
                        } else {
                            sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$split$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitHeader"])(value);
                        }
                        const list = [];
                        for (const section of sections){
                            list.push(await deserializer.read(headerListValueSchema, section.trim()));
                        }
                        dataObject[memberName] = list;
                    } else {
                        dataObject[memberName] = await deserializer.read(memberSchema, value);
                    }
                }
            } else if (memberTraits.httpPrefixHeaders !== undefined) {
                dataObject[memberName] = {};
                for (const [header, value] of Object.entries(response.headers)){
                    if (header.startsWith(memberTraits.httpPrefixHeaders)) {
                        const valueSchema = memberSchema.getValueSchema();
                        valueSchema.getMergedTraits().httpHeader = header;
                        dataObject[memberName][header.slice(memberTraits.httpPrefixHeaders.length)] = await deserializer.read(valueSchema, value);
                    }
                }
            } else if (memberTraits.httpResponseCode) {
                dataObject[memberName] = response.statusCode;
            } else {
                nonHttpBindingMembers.push(memberName);
            }
        }
        nonHttpBindingMembers.discardResponseBody = discardResponseBody;
        return nonHttpBindingMembers;
    }
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/schema-serde-lib/schema-date-utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "_parseEpochTimestamp": ()=>_parseEpochTimestamp,
    "_parseRfc3339DateTimeWithOffset": ()=>_parseRfc3339DateTimeWithOffset,
    "_parseRfc7231DateTime": ()=>_parseRfc7231DateTime
});
const ddd = "(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?";
const mmm = "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)";
const time = "(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?";
const date = "(\\d?\\d)";
const year = "(\\d{4})";
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/);
const IMF_FIXDATE = new RegExp("^".concat(ddd, ", ").concat(date, " ").concat(mmm, " ").concat(year, " ").concat(time, " GMT$"));
const RFC_850_DATE = new RegExp("^".concat(ddd, ", ").concat(date, "-").concat(mmm, "-(\\d\\d) ").concat(time, " GMT$"));
const ASC_TIME = new RegExp("^".concat(ddd, " ").concat(mmm, " ( [1-9]|\\d\\d) ").concat(time, " ").concat(year, "$"));
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const _parseEpochTimestamp = (value)=>{
    if (value == null) {
        return void 0;
    }
    let num = NaN;
    if (typeof value === "number") {
        num = value;
    } else if (typeof value === "string") {
        if (!/^-?\d*\.?\d+$/.test(value)) {
            throw new TypeError("parseEpochTimestamp - numeric string invalid.");
        }
        num = Number.parseFloat(value);
    } else if (typeof value === "object" && value.tag === 1) {
        num = value.value;
    }
    if (isNaN(num) || Math.abs(num) === Infinity) {
        throw new TypeError("Epoch timestamps must be valid finite numbers.");
    }
    return new Date(Math.round(num * 1000));
};
const _parseRfc3339DateTimeWithOffset = (value)=>{
    if (value == null) {
        return void 0;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC3339 timestamps must be strings");
    }
    const matches = RFC3339_WITH_OFFSET.exec(value);
    if (!matches) {
        throw new TypeError("Invalid RFC3339 timestamp format ".concat(value));
    }
    const [, yearStr, monthStr, dayStr, hours, minutes, seconds, , ms, offsetStr] = matches;
    range(monthStr, 1, 12);
    range(dayStr, 1, 31);
    range(hours, 0, 23);
    range(minutes, 0, 59);
    range(seconds, 0, 60);
    const date = new Date(Date.UTC(Number(yearStr), Number(monthStr) - 1, Number(dayStr), Number(hours), Number(minutes), Number(seconds), Number(ms) ? Math.round(parseFloat("0.".concat(ms)) * 1000) : 0));
    date.setUTCFullYear(Number(yearStr));
    if (offsetStr.toUpperCase() != "Z") {
        const [, sign, offsetH, offsetM] = /([+-])(\d\d):(\d\d)/.exec(offsetStr) || [
            void 0,
            "+",
            0,
            0
        ];
        const scalar = sign === "-" ? 1 : -1;
        date.setTime(date.getTime() + scalar * (Number(offsetH) * 60 * 60 * 1000 + Number(offsetM) * 60 * 1000));
    }
    return date;
};
const _parseRfc7231DateTime = (value)=>{
    if (value == null) {
        return void 0;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC7231 timestamps must be strings.");
    }
    let day;
    let month;
    let year;
    let hour;
    let minute;
    let second;
    let fraction;
    let matches;
    if (matches = IMF_FIXDATE.exec(value)) {
        [, day, month, year, hour, minute, second, fraction] = matches;
    } else if (matches = RFC_850_DATE.exec(value)) {
        [, day, month, year, hour, minute, second, fraction] = matches;
        year = (Number(year) + 1900).toString();
    } else if (matches = ASC_TIME.exec(value)) {
        [, month, day, hour, minute, second, fraction, year] = matches;
    }
    if (year && second) {
        const timestamp = Date.UTC(Number(year), months.indexOf(month), Number(day), Number(hour), Number(minute), Number(second), fraction ? Math.round(parseFloat("0.".concat(fraction)) * 1000) : 0);
        range(day, 1, 31);
        range(hour, 0, 23);
        range(minute, 0, 59);
        range(second, 0, 60);
        const date = new Date(timestamp);
        date.setUTCFullYear(Number(year));
        return date;
    }
    throw new TypeError("Invalid RFC7231 date-time value ".concat(value, "."));
};
function range(v, min, max) {
    const _v = Number(v);
    if (_v < min || _v > max) {
        throw new Error("Value ".concat(_v, " out of range [").concat(min, ", ").concat(max, "]"));
    }
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "LazyJsonString": ()=>LazyJsonString
});
const LazyJsonString = function LazyJsonString(val) {
    const str = Object.assign(new String(val), {
        deserializeJSON () {
            return JSON.parse(String(val));
        },
        toString () {
            return String(val);
        },
        toJSON () {
            return String(val);
        }
    });
    return str;
};
LazyJsonString.from = (object)=>{
    if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
        return object;
    } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
        return LazyJsonString(String(object));
    }
    return LazyJsonString(JSON.stringify(object));
};
LazyJsonString.fromObject = LazyJsonString.from;
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "NumericValue": ()=>NumericValue,
    "nv": ()=>nv
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
const format = /^-?\d*(\.\d+)?$/;
class NumericValue {
    toString() {
        return this.string;
    }
    static [Symbol.hasInstance](object) {
        if (!object || typeof object !== "object") {
            return false;
        }
        const _nv = object;
        return NumericValue.prototype.isPrototypeOf(object) || _nv.type === "bigDecimal" && format.test(_nv.string);
    }
    constructor(string, type){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "string", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", void 0);
        this.string = string;
        this.type = type;
        if (!format.test(string)) {
            throw new Error('@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".');
        }
    }
}
function nv(input) {
    return new NumericValue(String(input), "bigDecimal");
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "determineTimestampFormat": ()=>determineTimestampFormat
});
function determineTimestampFormat(ns, settings) {
    if (settings.timestampFormat.useTrait) {
        if (ns.isTimestampSchema() && (ns.getSchema() === 5 || ns.getSchema() === 6 || ns.getSchema() === 7)) {
            return ns.getSchema();
        }
    }
    const { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = ns.getMergedTraits();
    const bindingFormat = settings.httpBindings ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader) ? 6 : Boolean(httpQuery) || Boolean(httpLabel) ? 5 : undefined : undefined;
    return bindingFormat !== null && bindingFormat !== void 0 ? bindingFormat : settings.timestampFormat.default;
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "FromStringShapeDeserializer": ()=>FromStringShapeDeserializer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$schema$2d$serde$2d$lib$2f$schema$2d$date$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/schema-serde-lib/schema-date-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$lazy$2d$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$value$2f$NumericValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$split$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/split-header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$base64$40$4$2e$3$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$fromBase64$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-base64@4.3.2/node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$utf8$40$4$2e$2$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-utf8@4.2.2/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$SerdeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$serde$2f$determineTimestampFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class FromStringShapeDeserializer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$SerdeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerdeContext"] {
    read(_schema, data) {
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(_schema);
        if (ns.isListSchema()) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$split$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitHeader"])(data).map((item)=>this.read(ns.getValueSchema(), item));
        }
        if (ns.isBlobSchema()) {
            var _this_serdeContext;
            var _this_serdeContext_base64Decoder;
            return ((_this_serdeContext_base64Decoder = (_this_serdeContext = this.serdeContext) === null || _this_serdeContext === void 0 ? void 0 : _this_serdeContext.base64Decoder) !== null && _this_serdeContext_base64Decoder !== void 0 ? _this_serdeContext_base64Decoder : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$base64$40$4$2e$3$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$fromBase64$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase64"])(data);
        }
        if (ns.isTimestampSchema()) {
            const format = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$serde$2f$determineTimestampFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["determineTimestampFormat"])(ns, this.settings);
            switch(format){
                case 5:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$schema$2d$serde$2d$lib$2f$schema$2d$date$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parseRfc3339DateTimeWithOffset"])(data);
                case 6:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$schema$2d$serde$2d$lib$2f$schema$2d$date$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parseRfc7231DateTime"])(data);
                case 7:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$schema$2d$serde$2d$lib$2f$schema$2d$date$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parseEpochTimestamp"])(data);
                default:
                    console.warn("Missing timestamp format, parsing value with Date constructor:", data);
                    return new Date(data);
            }
        }
        if (ns.isStringSchema()) {
            const mediaType = ns.getMergedTraits().mediaType;
            let intermediateValue = data;
            if (mediaType) {
                if (ns.getMergedTraits().httpHeader) {
                    intermediateValue = this.base64ToUtf8(intermediateValue);
                }
                const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
                if (isJson) {
                    intermediateValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$lazy$2d$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyJsonString"].from(intermediateValue);
                }
                return intermediateValue;
            }
        }
        if (ns.isNumericSchema()) {
            return Number(data);
        }
        if (ns.isBigIntegerSchema()) {
            return BigInt(data);
        }
        if (ns.isBigDecimalSchema()) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$value$2f$NumericValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumericValue"](data, "bigDecimal");
        }
        if (ns.isBooleanSchema()) {
            return String(data).toLowerCase() === "true";
        }
        return data;
    }
    base64ToUtf8(base64String) {
        var _this_serdeContext, _this_serdeContext1;
        var _this_serdeContext_utf8Encoder, _this_serdeContext_base64Decoder;
        return ((_this_serdeContext_utf8Encoder = (_this_serdeContext = this.serdeContext) === null || _this_serdeContext === void 0 ? void 0 : _this_serdeContext.utf8Encoder) !== null && _this_serdeContext_utf8Encoder !== void 0 ? _this_serdeContext_utf8Encoder : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$utf8$40$4$2e$2$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8"])(((_this_serdeContext_base64Decoder = (_this_serdeContext1 = this.serdeContext) === null || _this_serdeContext1 === void 0 ? void 0 : _this_serdeContext1.base64Decoder) !== null && _this_serdeContext_base64Decoder !== void 0 ? _this_serdeContext_base64Decoder : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$base64$40$4$2e$3$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$fromBase64$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase64"])(base64String));
    }
    constructor(settings){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "settings", void 0);
        this.settings = settings;
    }
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "HttpInterceptingShapeDeserializer": ()=>HttpInterceptingShapeDeserializer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$utf8$40$4$2e$2$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-utf8@4.2.2/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$utf8$40$4$2e$2$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-utf8@4.2.2/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$SerdeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$serde$2f$FromStringShapeDeserializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js [app-client] (ecmascript)");
;
;
;
;
;
class HttpInterceptingShapeDeserializer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$SerdeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerdeContext"] {
    setSerdeContext(serdeContext) {
        this.stringDeserializer.setSerdeContext(serdeContext);
        this.codecDeserializer.setSerdeContext(serdeContext);
        this.serdeContext = serdeContext;
    }
    read(schema, data) {
        var _this_serdeContext;
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(schema);
        const traits = ns.getMergedTraits();
        var _this_serdeContext_utf8Encoder;
        const toString = (_this_serdeContext_utf8Encoder = (_this_serdeContext = this.serdeContext) === null || _this_serdeContext === void 0 ? void 0 : _this_serdeContext.utf8Encoder) !== null && _this_serdeContext_utf8Encoder !== void 0 ? _this_serdeContext_utf8Encoder : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$utf8$40$4$2e$2$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8"];
        if (traits.httpHeader || traits.httpResponseCode) {
            return this.stringDeserializer.read(ns, toString(data));
        }
        if (traits.httpPayload) {
            if (ns.isBlobSchema()) {
                var _this_serdeContext1;
                var _this_serdeContext_utf8Decoder;
                const toBytes = (_this_serdeContext_utf8Decoder = (_this_serdeContext1 = this.serdeContext) === null || _this_serdeContext1 === void 0 ? void 0 : _this_serdeContext1.utf8Decoder) !== null && _this_serdeContext_utf8Decoder !== void 0 ? _this_serdeContext_utf8Decoder : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$utf8$40$4$2e$2$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromUtf8"];
                if (typeof data === "string") {
                    return toBytes(data);
                }
                return data;
            } else if (ns.isStringSchema()) {
                if ("byteLength" in data) {
                    return toString(data);
                }
                return data;
            }
        }
        return this.codecDeserializer.read(ns, data);
    }
    constructor(codecDeserializer, codecSettings){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "codecDeserializer", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "stringDeserializer", void 0);
        this.codecDeserializer = codecDeserializer;
        this.stringDeserializer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$serde$2f$FromStringShapeDeserializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FromStringShapeDeserializer"](codecSettings);
    }
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "quoteHeader": ()=>quoteHeader
});
function quoteHeader(part) {
    if (part.includes(",") || part.includes('"')) {
        part = '"'.concat(part.replace(/"/g, '\\"'), '"');
    }
    return part;
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ToStringShapeSerializer": ()=>ToStringShapeSerializer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$date$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$uuid$40$1$2e$1$2e$2$2f$node_modules$2f40$smithy$2f$uuid$2f$dist$2d$es$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__v4__as__generateIdempotencyToken$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+uuid@1.1.2/node_modules/@smithy/uuid/dist-es/v4.js [app-client] (ecmascript) <export v4 as generateIdempotencyToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$lazy$2d$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$quote$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$base64$40$4$2e$3$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-base64@4.3.2/node_modules/@smithy/util-base64/dist-es/toBase64.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$SerdeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$serde$2f$determineTimestampFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js [app-client] (ecmascript)");
;
;
;
;
;
;
class ToStringShapeSerializer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$SerdeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerdeContext"] {
    write(schema, value) {
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(schema);
        switch(typeof value){
            case "object":
                if (value === null) {
                    this.stringBuffer = "null";
                    return;
                }
                if (ns.isTimestampSchema()) {
                    if (!(value instanceof Date)) {
                        throw new Error("@smithy/core/protocols - received non-Date value ".concat(value, " when schema expected Date in ").concat(ns.getName(true)));
                    }
                    const format = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$serde$2f$determineTimestampFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["determineTimestampFormat"])(ns, this.settings);
                    switch(format){
                        case 5:
                            this.stringBuffer = value.toISOString().replace(".000Z", "Z");
                            break;
                        case 6:
                            this.stringBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$date$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateToUtcString"])(value);
                            break;
                        case 7:
                            this.stringBuffer = String(value.getTime() / 1000);
                            break;
                        default:
                            console.warn("Missing timestamp format, using epoch seconds", value);
                            this.stringBuffer = String(value.getTime() / 1000);
                    }
                    return;
                }
                if (ns.isBlobSchema() && "byteLength" in value) {
                    var _this_serdeContext;
                    var _this_serdeContext_base64Encoder;
                    this.stringBuffer = ((_this_serdeContext_base64Encoder = (_this_serdeContext = this.serdeContext) === null || _this_serdeContext === void 0 ? void 0 : _this_serdeContext.base64Encoder) !== null && _this_serdeContext_base64Encoder !== void 0 ? _this_serdeContext_base64Encoder : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$base64$40$4$2e$3$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(value);
                    return;
                }
                if (ns.isListSchema() && Array.isArray(value)) {
                    let buffer = "";
                    for (const item of value){
                        this.write([
                            ns.getValueSchema(),
                            ns.getMergedTraits()
                        ], item);
                        const headerItem = this.flush();
                        const serialized = ns.getValueSchema().isTimestampSchema() ? headerItem : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$quote$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quoteHeader"])(headerItem);
                        if (buffer !== "") {
                            buffer += ", ";
                        }
                        buffer += serialized;
                    }
                    this.stringBuffer = buffer;
                    return;
                }
                this.stringBuffer = JSON.stringify(value, null, 2);
                break;
            case "string":
                const mediaType = ns.getMergedTraits().mediaType;
                let intermediateValue = value;
                if (mediaType) {
                    const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
                    if (isJson) {
                        intermediateValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$lazy$2d$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyJsonString"].from(intermediateValue);
                    }
                    if (ns.getMergedTraits().httpHeader) {
                        var _this_serdeContext1;
                        var _this_serdeContext_base64Encoder1;
                        this.stringBuffer = ((_this_serdeContext_base64Encoder1 = (_this_serdeContext1 = this.serdeContext) === null || _this_serdeContext1 === void 0 ? void 0 : _this_serdeContext1.base64Encoder) !== null && _this_serdeContext_base64Encoder1 !== void 0 ? _this_serdeContext_base64Encoder1 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$base64$40$4$2e$3$2e$2$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(intermediateValue.toString());
                        return;
                    }
                }
                this.stringBuffer = value;
                break;
            default:
                if (ns.isIdempotencyToken()) {
                    this.stringBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$uuid$40$1$2e$1$2e$2$2f$node_modules$2f40$smithy$2f$uuid$2f$dist$2d$es$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__v4__as__generateIdempotencyToken$3e$__["generateIdempotencyToken"])();
                } else {
                    this.stringBuffer = String(value);
                }
        }
    }
    flush() {
        const buffer = this.stringBuffer;
        this.stringBuffer = "";
        return buffer;
    }
    constructor(settings){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "settings", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "stringBuffer", "");
        this.settings = settings;
    }
}
}),
"[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "HttpInterceptingShapeSerializer": ()=>HttpInterceptingShapeSerializer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$serde$2f$ToStringShapeSerializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+core@3.23.11/node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js [app-client] (ecmascript)");
;
;
;
class HttpInterceptingShapeSerializer {
    setSerdeContext(serdeContext) {
        this.codecSerializer.setSerdeContext(serdeContext);
        this.stringSerializer.setSerdeContext(serdeContext);
    }
    write(schema, value) {
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(schema);
        const traits = ns.getMergedTraits();
        if (traits.httpHeader || traits.httpLabel || traits.httpQuery) {
            this.stringSerializer.write(ns, value);
            this.buffer = this.stringSerializer.flush();
            return;
        }
        return this.codecSerializer.write(ns, value);
    }
    flush() {
        if (this.buffer !== undefined) {
            const buffer = this.buffer;
            this.buffer = undefined;
            return buffer;
        }
        return this.codecSerializer.flush();
    }
    constructor(codecSerializer, codecSettings, stringSerializer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$core$40$3$2e$23$2e$11$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$serde$2f$ToStringShapeSerializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToStringShapeSerializer"](codecSettings)){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "codecSerializer", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "stringSerializer", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "buffer", void 0);
        this.codecSerializer = codecSerializer;
        this.stringSerializer = stringSerializer;
    }
}
}),
}]);

//# sourceMappingURL=99a6b_%40smithy_core_dist-es_f702dd57._.js.map