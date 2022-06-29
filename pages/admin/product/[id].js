import { Tabs } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
const Icerikler = dynamic(() => import('components/icerikler/Icerikler'), {
  ssr: false,
})
const RssIcerikler = dynamic(() => import('components/rssIcerikler/Icerikler'), {
  ssr: false,
})
export default function KategoriDetay() {
  return (
    <Tabs type="card">
      <Tabs.TabPane tab="جميع المحتوى" key="1">
        <Icerikler />
      </Tabs.TabPane>
      <Tabs.TabPane tab="جميع المحتوى (RSS)" key="2">
        <RssIcerikler />
      </Tabs.TabPane>
    </Tabs>
  )
}
