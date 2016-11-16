'use strict';
import {Flex, Button, WhiteSpace, WingBlank, Carousel, Accordion, List} from 'antd-mobile';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import ItemList from './app/ItemList';
import ItemDetail from './app/ItemDetail';

const App = React.createClass({
    getInitialState() {
        return {
            windowWidth: (typeof window !== 'undefined') ? window.innerWidth : undefined,
            windowHeight: (typeof window !== 'undefined') ? window.innerHeight : undefined,
            current: 2
        };
    },
    handleResize(e) {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    },
    beforeSlide(from, to) {
        console.log(`slide from ${from} to ${to}`);
    },

    slideTo(index) {
        console.log('slide to', index);
    },
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);

    },
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    render() {
        const width = this.state.windowWidth;
        const height = this.state.windowHeight;
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            selectedIndex: this.state.current,
            beforeChange: this.beforeSlide,
            afterChange: this.slideTo
        };
        return (
            <div style={{height:height,width:width}}>
                <Flex direction="column">

                    <div
                        style={{height:0.1*height,width:width,background:'#194497',display:'flex',alignItems: 'center',justifyContent: 'space-between'}}>
                        <img style={{height:0.055*height,width:0.575*width,marginLeft:0.03*width}}
                             src="http://120.27.124.108/logo_1.png" alt=""/>
                        <img style={{height:0.035*height,width:0.065*width,marginRight:0.03*width}}
                             src="http://www.szsi.gov.cn/theme/ico/menu.png" width="421" height="53" alt=""/>
                    </div>

                    <div
                        style={{height:0.35*height,width:width}}>
                        <div className="pagination-container">
                            <WingBlank>
                                <Carousel {...settings}>
                                    <Flex
                                        justify="center"
                                        className="flex-container-justify"
                                    >
                                        <img style={{height:0.35*height,width:width}}
                                             src="http://www.szsi.gov.cn/theme/images/indexBan1.jpg" alt=""/>
                                    </Flex>
                                    <Flex
                                        justify="center"
                                        className="flex-container-justify"
                                    >
                                        <img style={{height:0.35*height,width:width}}
                                             src="http://www.szsi.gov.cn/theme/images/banner3_pc.jpg" alt=""/>
                                    </Flex>
                                    <Flex
                                        justify="center"
                                        className="flex-container-justify"
                                    >
                                        <img style={{height:0.35*height,width:width}}
                                             src="http://www.szsi.gov.cn/theme/images/banner2_pc.jpg" alt=""/>
                                    </Flex>
                                </Carousel>
                            </WingBlank>
                            <WhiteSpace size="lg"/>
                        </div>
                    </div>
                    <div style={{width:width}}>
                        <div style={{ marginTop: 0.015*height}}>
                            <Accordion>
                                <Accordion.Panel header="社保资讯" style={{backgound:'#2A83D7'}}>
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '机构概况'} }}>
                                                <List.Item>机构概况</List.Item>
                                            </Link>

                                        </Flex.Item>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '社保新闻'} }}>
                                                <List.Item>社保新闻</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '通知公告'} }}>
                                                <List.Item>通知公告</List.Item>
                                            </Link>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '业务公示'} }}>
                                                <List.Item>业务公示</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                        <div style={{ marginTop: 0.015*height}}>
                            <Accordion>
                                <Accordion.Panel header="政策法规" style={{marginTop: 0.015*height}}>
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '养老保险'} }}>
                                                <List.Item>养老保险</List.Item>
                                            </Link>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '医疗保险'} }}>
                                                <List.Item>医疗保险</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '少儿大学生医保'} }}>
                                                <List.Item>少儿大学生医保</List.Item>
                                            </Link>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '生育保险'} }}>
                                                <List.Item>生育保险</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '失业保险'} }}>
                                                <List.Item>失业保险</List.Item>
                                            </Link>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '工商保险'} }}>
                                                <List.Item>工商保险</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '社保征收'} }}>
                                                <List.Item>社保征收</List.Item>
                                            </Link>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '社保转移'} }}>
                                                <List.Item>社保转移</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '政策解读'} }}>
                                                <List.Item>政策解读</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                        <div style={{ marginTop: 0.015*height}}>
                            <Accordion>
                                <Accordion.Panel header="办事指南">
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '社保征收'} }}>
                                                <List.Item>社保征收</List.Item>
                                            </Link>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '养老保险'} }}>
                                                <List.Item>养老保险</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '医疗保险'} }}>
                                                <List.Item>医疗保险</List.Item>
                                            </Link>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '少儿大学生医保'} }}>
                                                <List.Item>少儿大学生医保</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '工商保险'} }}>
                                                <List.Item>工商保险</List.Item>
                                            </Link>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '失业保险'} }}>
                                                <List.Item>失业保险</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '社保转移'} }}>
                                                <List.Item>社保转移</List.Item>
                                            </Link>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '生育保险'} }}>
                                                <List.Item>生育保险</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                        <div style={{ marginTop: 0.015*height}}>
                            <Accordion>
                                <Accordion.Panel header="网上办事">
                                    <List.Item>社会保险服务个人网页</List.Item>
                                    <List.Item>邮政代办社保业务服务平台</List.Item>
                                    <List.Item>个人社会保险信息查询</List.Item>
                                    <List.Item>少儿大学生医保查询</List.Item>
                                    <List.Item>医保药品目录查询</List.Item>
                                    <List.Item>定点医保单位查询</List.Item>
                                    <List.Item>工伤劳动能力鉴定查询</List.Item>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                        <div style={{ marginTop: 0.015*height}}>
                            <Accordion>
                                <Accordion.Panel header="互动交流">
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '业务知识库'} }}>
                                                <List.Item>业务知识库</List.Item>
                                            </Link>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '意见征集'} }}>
                                                <List.Item>意见征集</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                    <Flex>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '网上调查'} }}>
                                                <List.Item>网上调查</List.Item>
                                            </Link>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Link to={{ pathname: '/itemlist', query: {itemlist_name: '微信公众号'} }}>
                                                <List.Item>微信公众号</List.Item>
                                            </Link>
                                        </Flex.Item>
                                    </Flex>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    </div>
                    <div
                        style={{width:width, marginTop: 0.015*height,background:'white',height:0.12*height,display:'flex',alignItems: 'center',justifyContent: 'center',color:'silver'}}>
                        <span style={{fontSize:0.015*height}}>
                            <p>@社会保险</p>
                            <p>Power by EflTech</p>
                        </span>
                    </div>

                </Flex>

            </div>
        );
    }
});


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/index.html" component={App}/>
        <Route path="itemlist" component={ItemList}/>
        <Route path="itemlist/itemdetail/:id" component={ItemDetail}/>
    </Router>
), document.getElementById('root'));


