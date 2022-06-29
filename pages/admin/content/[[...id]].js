import React from 'react';
import dynamic from 'next/dynamic';

const IcerikEkleDuznle = dynamic(() => import('components/icerikler/IcerikEkleDuzenle'), {
  ssr: false,
})
export default function IcerikEkleDuzenle() {
  return (
    <div>
        <IcerikEkleDuznle/>
    </div>
  )
}
