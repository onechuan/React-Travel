import React from 'react'
import styles from "./App.module.css"
import {Header, Footer, } from "./components"
import {Row, Col, Typography} from "antd"
import {SideMenu,Carousel,BusinessPartners,ProductionCollection} from "./components"

import{ productLists} from "./mock/productionsMock"
import sideImage01 from './assets/images/sider_2019_12-09.png';
import sideImage02 from './assets/images/sider_2019_02-04.png';
import sideImage03 from './assets/images/sider_2019_02-04-2.png';
const productConfigs = [{
  title:"爆款推荐",
  sideImage:sideImage01,
  type:"danger"
},{
  title:"爆款推荐",
  sideImage:sideImage01,
  type:"warning"
},{
  title:"爆款推荐",
  sideImage:sideImage01,
  type:"success"
}]
const App = ()=>{
  return <div className={styles.App}>
    <Header/>
    {/* 内容栏 */}
    <div className={styles["page-content"]}>
      <Row style={{ marginTop: 20 }}>
        <Col span={6}>
          <SideMenu/>
        </Col>
        <Col span={18}>
          <Carousel />
        </Col>
      </Row>
      {/* 热门推荐 */}
      {
        productLists.map((productList, productIndex)=>{
          return <ProductionCollection title={
            <Typography.Title level={3} type={productConfigs[productIndex].type as any}>
              {productConfigs[productIndex].title}
            </Typography.Title>
          }
          sideImage={productConfigs[productIndex].sideImage}
          products={productList}
          key={productIndex}
          />
        })
      }
      {/* 商业合作伙伴 */}
      <BusinessPartners />
    </div>
    {/* 底部栏 */}
    <Footer/>
  </div>
}

export default App
