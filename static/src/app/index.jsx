import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb } from 'antd'  //ui组件
import 'antd/lib/layout/style/css'
const { Header, Content, Footer } = Layout
class App extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '12px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                </Content>
            </Layout>
        )
    }
}
export default App