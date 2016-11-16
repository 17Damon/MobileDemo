'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom'

import {withRouter} from 'react-router'
import Simditor from 'simditor';
import $ from 'jquery';
import objectAssign from 'object-assign';


var HTMLtoJSX = require('htmltojsx');
var HtmlToReactParser = require('html-to-react').Parser;
var htmlToReactParser = new HtmlToReactParser(React);
var converter = new HTMLtoJSX({
    createClass: false
    // outputClassName: 'AwesomeComponent'

});
var htmlInput = `<h1 style="text-align: center;"><span style="color: rgb(65, 140, 175);">关于防范冒用“社保”名义电信诈骗的温馨提示</span></h1><hr><p style="text-align: center;"><b>日期：2016-09-26&nbsp;来源：市社保局</b></p><p>　　近期，电信诈骗案件持续高发，有不法分子冒用“社保”名义实施诈骗，严重危害广大市民财产安全。为让广大市民了解掌握冒用“社保”名义诈骗的手法，增强防范电信诈骗的意识和能力，现梳理了常见的冒用“社保”名义诈骗手法如下：</p><p>　　骗术一：“社保卡消费异常，账户被冻结”</p><p>　　通过电信伪基站发送短信或拨打电话，冒用“社保”名义以社保卡（医保卡）消费异常被盗刷或欠费被冻结为名，要求参保人配合处理，提供个人信息等相关内容，诱骗参保人员转账汇款实施诈骗。</p><p>　　骗术二：“补充登记完善社保个人信息”</p><p>　　通过电脑改号软件伪装成“社保机构”对外公布的联系电话致电参保人，以补充登记完善社保个人信息为名，骗取个人身份信息和银行卡信息进行诈骗 。</p><p>　　骗术三：“发放社保补贴”</p><p>　　以发放“社保补贴”为名发送诈骗短信或拨打电话，骗子在解读“社保政策”获取信任后，诱骗参保人的个人身份信息和银行卡信息，实施诈骗 。</p><p>　　骗术四：“伪造社保虚假公文”</p><p>　　以社保经办机构名义，伪造虚假文件向参保单位及个人发放，以社保基金账户变更为名，要求参保单位和个人预交社保费，直接将资金转入某银行帐户实施诈骗。</p><p>　　骗术五：“代缴社保、补缴社保”</p><p>　　非深圳户籍人员在购房、办理居住证、子女入学等均有参保年限要求，不法分子以代理社保参保为名发送诈骗短信或拨打电话，谎称可挂靠参保或补缴社保，要求转账汇款缴交社保费（另，挂靠参保属违法行为，一经发现将根据规定进行清理并处罚）。</p><p>　　骗术六：“办理社保关系转移”</p><p>　　因工作变换，参保人经常会跨市、跨省办理社保关系转移，不法分子以社保经办机构名义拨打电话，要求参保人转保时将钱转入指定个人账户。</p><p>　　防范要点：</p><p>　　一、不要随便点击或拨打短信里的不明链接和电话。</p><p>　　二、社保重要政策调整或实施我局均会在报纸、广播、电视、官方网站、微信公众号等正规渠道进行公告。</p><p>　　三、社保部门办理社保费征收、社保待遇支付、医疗费报销等业务均使用账户名为“深圳市社会保险基金管理局”的单位账户，不会要求参保人转账汇款到私人账户。</p><p>　　四、凡以社保名义的来信或来电涉及转账汇款的，请拨打全市统一社会保障咨询热线12333或到社保经办机构现场核实，谨防上当受骗。</p><p>　　五、如发现受骗应第一时间拨打110向公安部门报案。深圳市公安局反信息诈骗咨询专线号码：0755-81234567。</p><p><br></p><p style="text-align: right;"><b>　　深圳市社会保险基金管理局</b></p><p style="text-align: right;"><b>　　2016年9月26日</b></p>`;

var reactComponent = htmlToReactParser.parse(<div><h1 style={{textAlign: 'center'}}>第一次</h1>
    <hr/>
    <ol>
        <li>我的家</li>
        <li>你的家</li>
        <li>大家的家</li>
    </ol>
</div>);
const toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'];

var SimpEditor = React.createClass({
    getInitialState(){
        return {
            editor: null,
            className: `simpeditor ${this.props.className}`,
            opts: this.props.opts
        }
    },
    componentDidMount () {
        const textarea = ReactDOM.findDOMNode(this.refs.textarea);
        const frame = ReactDOM.findDOMNode(this.refs.frame);
        console.log($(frame));
        $(frame).html(htmlInput);
        this.setState({
            editor: new Simditor(objectAssign({}, {
                textarea: $(textarea),
                defaultImage: '/public/images/empty.png',
                upload: {
                    url: '/uploader/adminEditorImg',
                    params: {folder: this.props.fileFolder || 'mailbox'},
                    fileKey: 'uploadFile', connectionCount: 3,
                    leaveConfirm: '正在上传文件中，如果离开页面将自动取消。'
                },
                toolbar: toolbar,
                toolbarHidden: false,
                pasteImage: true
            }, this.state.opts))
        });

        if (typeof this.props.children === 'string' && this.props.children) {
            this.setValue(this.props.children);
        }
    },
    componentWillUnmount () {
        this.setState({
            editor: null
        });
    },
    getValue () {
        return this.state.editor.getValue();
    },
    setValue (content) {
        this.state.editor.setValue(content);
    },
    sync () {
        return this.state.editor.sync();
    },
    focus () {
        return this.editor.state.focus();
    },
    blur () {
        return this.editor.state.blur();
    },
    hidePopover () {
        return this.editor.state.hidePopover();
    },
    destroy () {
        this.editor.state.destroy();
    },
    render () {
        return (
            <div className={this.state.className}
                 style={{display:"flex",flexDirection:'column',alignItems: 'center',justifyContent: 'center',backgroundColor:'white'}}>

                <div style={{width:'90%'}}>
                    <textarea ref="textarea"></textarea>
                </div>

                <button onClick={()=>{
                console.log(this.state.editor.getValue());
                }}>查看内容
                </button>
                <button onClick={()=>{
                console.log(this.state.editor.setValue(htmlInput));
                }}>设置内容
                </button>
                <div style={{width:'90%'}}>
                    <div ref="frame">1234</div>
                </div>
            </div>
        );
    }
});

SimpEditor.defaultProps = {
    className: '',
    opts: {}
};

// export default SimpEditor;

module.exports = React.createFactory(withRouter(SimpEditor));

// <div style={{width:'90%'}}>
//     <textarea ref="textarea"></textarea>
// </div>

// <div style={{width:'90%'}}>
//
//     <Frame style={{boderWidth:0}}
//
//            initialContent='<!DOCTYPE html><html><head></head><body>
//
//                         <h1 style="text-align: center;">第一次</h1><hr><ol><li>我的家</li><li>你的家</li><li>大家的家</li></ol>
//
//                         </body></html>'
//            mountTarget='#mountHere'
//     >
//     </Frame>
// </div>

