'use strict';

var React = require('react');
var reactHookForm = require('react-hook-form');

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$6 = ".Input-module_input__YzB30 {\n  font-size: 1rem;\n  line-height: 1.7;\n  font-weight: 400;\n  color: #2D3643;\n  background-color: #FFFFFF;\n  border-radius: 6px;\n  border: 1px solid #ced4da;\n  padding: 11px 14px;\n  width: 100%;\n}\n.Input-module_input__YzB30::placeholder {\n  color: #AFBACA;\n}\n.Input-module_input__YzB30:focus,\n.Input-module_input__YzB30:focus-visible {\n  outline: 0;\n  border: 1px solid #5E718D;\n}\n.Input-module_input__YzB30:disabled {\n  border: 1px solid #D7DFE9;\n}\n.Input-module_input-error__-0ZPn {\n  color: #E92215;\n  background: #FFF5F4;\n  border: 1px solid #FFA19B;\n}\n";
var styles$1 = {"input":"Input-module_input__YzB30","input-error":"Input-module_input-error__-0ZPn"};
styleInject(css_248z$6);

const Input = (props) => {
    const { value, placeholder, disabled, error, onChange, } = props;
    return (React.createElement("input", { className: clsx(styles$1.input, error && styles$1['input-error']), placeholder: placeholder, onChange: onChange, value: value, disabled: disabled }));
};

var css_248z$5 = ".InputField-module_formInput__x-PdY .InputField-module_label__KQAUY {\n  margin-bottom: 6px;\n  color: #3D4A5C;\n  font-size: 1rem;\n  line-height: 1.7;\n  font-weight: 400;\n}\n.InputField-module_formInput__x-PdY .InputField-module_message__uDodf {\n  margin-top: 6px;\n  color: #3D4A5C;\n  font-size: 1rem;\n  line-height: 1.7;\n  font-weight: 400;\n}\n.InputField-module_formInput__x-PdY .InputField-module_message__uDodf.InputField-module_error__W0aVj {\n  color: #E92215;\n}\n";
var styles = {"formInput":"InputField-module_formInput__x-PdY","label":"InputField-module_label__KQAUY","message":"InputField-module_message__uDodf","error":"InputField-module_error__W0aVj"};
styleInject(css_248z$5);

const InputField = (props) => {
    const { label, value, placeholder, disabled, error, message, onChange, } = props;
    return (React.createElement("div", { className: styles.formInput },
        label && (React.createElement("label", { className: styles.label }, label)),
        React.createElement(Input, { onChange: onChange, placeholder: placeholder, disabled: disabled, value: value, error: error }),
        message && (React.createElement("div", { className: clsx(styles.message, error && styles.error) }, message))));
};

var css_248z$4 = ".Button-module_btn__a3T3p {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  line-height: 1.7;\n  background: #1B4DFF;\n  border-radius: 6px;\n  padding: 6px 12px;\n  border: 0;\n  color: #FFFFFF;\n}\n.Button-module_btn__a3T3p:hover {\n  background: #0F3CD9;\n}\n.Button-module_btn__a3T3p:focus {\n  box-shadow: 0px 1px 2px #E8EDFF, 0px 0px 0px 3px #E8EDFF;\n  border-radius: 6px;\n}\n.Button-module_btn__a3T3p:active {\n  background: #0F3CD9;\n}\n.Button-module_btn__a3T3p:disabled {\n  background: #B4C4FF;\n}\n.Button-module_btn-secondary__9jCHp {\n  color: #4A72FF;\n  border: 1px solid #4A72FF;\n  background: #FFFFFF;\n}\n.Button-module_btn-secondary__9jCHp:hover {\n  background: #F2F5FF;\n}\n.Button-module_btn-secondary__9jCHp:focus {\n  box-shadow: 0px 1px 2px #E8EDFF, 0px 0px 0px 3px #E8EDFF;\n  border-radius: 6px;\n}\n.Button-module_btn-secondary__9jCHp:active {\n  background: #F2F5FF;\n  border: 1px solid #4A72FF;\n  box-shadow: 0px 1px 2px rgba(45, 54, 67, 0.05);\n}\n.Button-module_btn-secondary__9jCHp:disabled {\n  background: #FFFFFF;\n  border: 1px solid #B4C4FF;\n}\n";
var style$4 = {"btn":"Button-module_btn__a3T3p","btn-secondary":"Button-module_btn-secondary__9jCHp"};
styleInject(css_248z$4);

const Button = (props) => {
    const { label, variant, disabled, onClick, type, } = props;
    return (React.createElement("button", { onClick: onClick, className: clsx(style$4.btn, getButtonVariantClassName(variant)), disabled: disabled, type: type }, label));
};
const getButtonVariantClassName = (variant) => {
    switch (variant) {
        case 'secondary':
            return style$4['btn-secondary'];
        default:
            return null;
    }
};

var css_248z$3 = ".Checkbox-module_checkbox__nfikP {\n  display: inline-flex;\n  font-size: 1rem;\n  line-height: 1.7;\n  cursor: pointer;\n}\n.Checkbox-module_checkbox-icon__SNBjB {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 5px;\n  cursor: inherit;\n}\n.Checkbox-module_checkbox-input__MXySd {\n  z-index: 1;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: inherit;\n}\n.Checkbox-module_checkbox-label__8dumx {\n  cursor: inherit;\n}\n";
var style$3 = {"checkbox":"Checkbox-module_checkbox__nfikP","checkbox-icon":"Checkbox-module_checkbox-icon__SNBjB","checkbox-input":"Checkbox-module_checkbox-input__MXySd","checkbox-label":"Checkbox-module_checkbox-label__8dumx"};
styleInject(css_248z$3);

const CheckboxInactiveIcon = () => {
    return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("rect", { x: "0.5", y: "0.5", width: "15", height: "15", rx: "3.5", fill: "#F9FAFB" }),
        React.createElement("rect", { x: "0.5", y: "0.5", width: "15", height: "15", rx: "3.5", stroke: "#AFBACA" })));
};

const CheckboxActiveIcon = () => {
    return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("rect", { width: "16", height: "16", rx: "4", fill: "#1B4DFF" }),
        React.createElement("path", { d: "M11.4375 5.8125L7.0625 10.1875L4.875 8", stroke: "white", strokeWidth: "1.53", strokeLinecap: "round", strokeLinejoin: "round" })));
};

const Checkbox = (props) => {
    const { checked, name, label, onChange } = props;
    return (React.createElement("label", { className: style$3.checkbox },
        React.createElement("span", { className: style$3['checkbox-icon'] },
            React.createElement("input", { name: name, className: style$3['checkbox-input'], onChange: onChange, checked: checked, type: "checkbox" }),
            checked
                ? React.createElement(CheckboxActiveIcon, null)
                : React.createElement(CheckboxInactiveIcon, null)),
        React.createElement("span", { className: style$3['checkbox-label'] }, label)));
};

var css_248z$2 = ".Table-module_table__wH-0S {\n  border-collapse: collapse;\n  width: 100%;\n}\n.Table-module_table__wH-0S .Table-module_thead__g4E2- .Table-module_tr__VqnfQ .Table-module_cell__PRWS8 {\n  background: #F9FAFB;\n}\n.Table-module_table__wH-0S .Table-module_thead__g4E2- .Table-module_tr__VqnfQ .Table-module_cell__PRWS8,\n.Table-module_table__wH-0S .Table-module_tbody__62wVy .Table-module_tr__VqnfQ .Table-module_cell__PRWS8 {\n  padding: 15px 20px 15px;\n}\n.Table-module_table__wH-0S .Table-module_thead__g4E2- .Table-module_tr__VqnfQ .Table-module_noData__zo2BT,\n.Table-module_table__wH-0S .Table-module_tbody__62wVy .Table-module_tr__VqnfQ .Table-module_noData__zo2BT {\n  display: flex;\n  justify-content: center;\n}\n.Table-module_table__wH-0S .Table-module_tbody__62wVy .Table-module_tr__VqnfQ + .Table-module_tr__VqnfQ {\n  border-top: #E9EFF6 solid 1px;\n}\n";
var style$2 = {"table":"Table-module_table__wH-0S","thead":"Table-module_thead__g4E2-","tr":"Table-module_tr__VqnfQ","cell":"Table-module_cell__PRWS8","tbody":"Table-module_tbody__62wVy","noData":"Table-module_noData__zo2BT"};
styleInject(css_248z$2);

// eslint-disable-next-line @typescript-eslint/comma-dangle
const BodyRow = (props) => {
    const { rowData, columns } = props;
    return (React.createElement("tr", { className: style$2.tr }, columns.map((column, index) => {
        // const childNode: React.ReactNode = rowData[column.dataIndex] as string;
        const { dataIndex, render } = column;
        // const path =
        //     dataIndex === null || dataIndex === undefined || dataIndex === ''
        //         ? []
        //         : Array.isArray(dataIndex)
        //             ? dataIndex
        //             : [dataIndex];
        // const childNode: React.ReactNode = getValue(rowData, path);
        let content = '';
        // if (dataIndex && rowData.hasOwnProperty(dataIndex)) {
        if (dataIndex) {
            content = render
                ? render(rowData[dataIndex], rowData, index)
                : rowData[dataIndex];
        }
        else if (render) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            content = render(rowData[dataIndex], rowData, index);
        }
        return (React.createElement("td", { key: index, className: style$2.cell }, content));
    })));
};

var css_248z$1 = ".Spin-module_spinNested__2VOQF {\n  position: relative;\n}\n.Spin-module_spinNested__2VOQF .Spin-module_spin__-6uyM {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.Spin-module_spinNested__2VOQF .Spin-module_spin__-6uyM .Spin-module_loader__--MKJ {\n  width: 25px;\n  height: 25px;\n  border: 5px solid #021f2638;\n  border-top-color: #021f26;\n  border-radius: 50%;\n  animation: Spin-module_spinning__5mETL 1s linear infinite;\n}\n@keyframes Spin-module_spinning__5mETL {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.Spin-module_spinNested__2VOQF .Spin-module_contentBlur__8dyoH {\n  opacity: 0.5;\n  user-select: none;\n  pointer-events: none;\n}\n";
var style$1 = {"spinNested":"Spin-module_spinNested__2VOQF","spin":"Spin-module_spin__-6uyM","loader":"Spin-module_loader__--MKJ","spinning":"Spin-module_spinning__5mETL","contentBlur":"Spin-module_contentBlur__8dyoH"};
styleInject(css_248z$1);

const Spin = (props) => {
    const { spinning } = props;
    return (React.createElement("div", { className: style$1.spinNested },
        spinning && (React.createElement("div", { className: clsx({ [style$1.spin]: spinning }), "data-testid": "spinner" },
            React.createElement("div", { className: style$1.loader }))),
        React.createElement("div", { className: clsx({ [style$1.contentBlur]: spinning }), "data-testid": "spin-content" }, props.children)));
};

// eslint-disable-next-line @typescript-eslint/comma-dangle
const Table = (props) => {
    const { columns, dataSource, rowKey, emptyText, loading, } = props;
    return (React.createElement("div", null,
        React.createElement(Spin, { spinning: loading },
            React.createElement("table", { className: style$2.table },
                React.createElement("thead", { className: style$2.thead },
                    React.createElement("tr", { className: style$2.tr }, columns.map((column) => {
                        return (React.createElement("th", { key: column.dataIndex, className: style$2.cell }, column.title));
                    }))),
                React.createElement("tbody", { className: style$2.tbody }, (dataSource === null || dataSource === void 0 ? void 0 : dataSource.length) > 0
                    ? (dataSource.map((rowData, index) => {
                        return React.createElement(BodyRow, { key: index, rowData: rowData, columns: columns, rowKey: rowKey });
                    }))
                    : (React.createElement("tr", { className: style$2.tr },
                        React.createElement("td", { className: style$2.cell, colSpan: columns.length },
                            React.createElement("div", { className: style$2.noData }, emptyText !== null && emptyText !== void 0 ? emptyText : 'no data')))))))));
};

var css_248z = ".Grid-module_row__HAskt {\n  margin: 8px 0;\n  display: flex;\n}\n.Grid-module_row__HAskt .Grid-module_col-1__OlOEZ {\n  width: 4.16666667%;\n}\n.Grid-module_row__HAskt .Grid-module_col-2__cwfTO {\n  width: 8.33333333%;\n}\n.Grid-module_row__HAskt .Grid-module_col-3__DBYn1 {\n  width: 12.5%;\n}\n.Grid-module_row__HAskt .Grid-module_col-4__DbUl7 {\n  width: 16.66666667%;\n}\n.Grid-module_row__HAskt .Grid-module_col-5__hOseg {\n  width: 20.83333333%;\n}\n.Grid-module_row__HAskt .Grid-module_col-6__5JHz9 {\n  width: 25%;\n}\n.Grid-module_row__HAskt .Grid-module_col-7__3zwGr {\n  width: 29.16666667%;\n}\n.Grid-module_row__HAskt .Grid-module_col-8__cVf0m {\n  width: 33.33333333%;\n}\n.Grid-module_row__HAskt .Grid-module_col-9__uwU7h {\n  width: 37.5%;\n}\n.Grid-module_row__HAskt .Grid-module_col-10__ZgSVZ {\n  width: 41.66666667%;\n}\n.Grid-module_row__HAskt .Grid-module_col-11__bto5v {\n  width: 45.83333333%;\n}\n.Grid-module_row__HAskt .Grid-module_col-12__esuoE {\n  width: 50%;\n}\n.Grid-module_row__HAskt .Grid-module_col-13__5tETB {\n  width: 54.16666667%;\n}\n.Grid-module_row__HAskt .Grid-module_col-14__QkKte {\n  width: 58.33333333%;\n}\n.Grid-module_row__HAskt .Grid-module_col-15__53C-L {\n  width: 62.5%;\n}\n.Grid-module_row__HAskt .Grid-module_col-16__O-YHE {\n  width: 66.66666667%;\n}\n.Grid-module_row__HAskt .Grid-module_col-17__ddRtB {\n  width: 70.83333333%;\n}\n.Grid-module_row__HAskt .Grid-module_col-18__kZInl {\n  width: 75%;\n}\n.Grid-module_row__HAskt .Grid-module_col-19__-FUSo {\n  width: 79.16666667%;\n}\n.Grid-module_row__HAskt .Grid-module_col-20__nBfUQ {\n  width: 83.33333333%;\n}\n.Grid-module_row__HAskt .Grid-module_col-21__XgCHj {\n  width: 87.5%;\n}\n.Grid-module_row__HAskt .Grid-module_col-22__jFNEw {\n  width: 91.66666667%;\n}\n.Grid-module_row__HAskt .Grid-module_col-23__bn7Mj {\n  width: 95.83333333%;\n}\n.Grid-module_row__HAskt .Grid-module_col-24__ezCXg {\n  width: 100%;\n}\n";
var style = {"row":"Grid-module_row__HAskt","col-1":"Grid-module_col-1__OlOEZ","col-2":"Grid-module_col-2__cwfTO","col-3":"Grid-module_col-3__DBYn1","col-4":"Grid-module_col-4__DbUl7","col-5":"Grid-module_col-5__hOseg","col-6":"Grid-module_col-6__5JHz9","col-7":"Grid-module_col-7__3zwGr","col-8":"Grid-module_col-8__cVf0m","col-9":"Grid-module_col-9__uwU7h","col-10":"Grid-module_col-10__ZgSVZ","col-11":"Grid-module_col-11__bto5v","col-12":"Grid-module_col-12__esuoE","col-13":"Grid-module_col-13__5tETB","col-14":"Grid-module_col-14__QkKte","col-15":"Grid-module_col-15__53C-L","col-16":"Grid-module_col-16__O-YHE","col-17":"Grid-module_col-17__ddRtB","col-18":"Grid-module_col-18__kZInl","col-19":"Grid-module_col-19__-FUSo","col-20":"Grid-module_col-20__nBfUQ","col-21":"Grid-module_col-21__XgCHj","col-22":"Grid-module_col-22__jFNEw","col-23":"Grid-module_col-23__bn7Mj","col-24":"Grid-module_col-24__ezCXg"};
styleInject(css_248z);

const Row = (props) => (React.createElement("div", { className: style.row }, props.children));

const Col = (props) => (React.createElement("div", { className: style[`col-${props.span}`] }, props.children));

const FormInput = (props) => {
    const { name, label, placeholder, disabled, } = props;
    const methods = reactHookForm.useFormContext();
    return (React.createElement(reactHookForm.Controller, { name: name, control: methods.control, render: ({ field, fieldState }) => {
            var _a;
            return (React.createElement(InputField, { label: label, disabled: disabled, placeholder: placeholder, value: field.value, onChange: field.onChange, error: fieldState.invalid, message: (_a = fieldState.error) === null || _a === void 0 ? void 0 : _a.message }));
        } }));
};

// eslint-disable-next-line @typescript-eslint/comma-dangle
const Form = (props) => {
    const { defaultValues, onSubmit, children } = props;
    const methods = reactHookForm.useForm({
        defaultValues,
    });
    const { handleSubmit } = methods;
    return (React.createElement(reactHookForm.FormProvider, Object.assign({}, methods),
        React.createElement("form", { onSubmit: handleSubmit(onSubmit) }, children)));
};
Form.FormInput = FormInput;

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Col = Col;
exports.Form = Form;
exports.Input = Input;
exports.InputField = InputField;
exports.Row = Row;
exports.Spin = Spin;
exports.Table = Table;
//# sourceMappingURL=index.js.map
