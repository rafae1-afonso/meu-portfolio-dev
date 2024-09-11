'use client';

import '@/app/styles/globals.css';
import React from 'react';
import ProjectPageComponent from '@/components/ProjectPageComponent';

const page = () => {
  return (
    <ProjectPageComponent
      thumbImageSrc='/assets/ProjectThumbnails/LiveDocs.png'
      deployRef='https://jsm-live-docs-five.vercel.app/'
      repoRef='https://github.com/rafae1-afonso/jsm_live_docs'
    >
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      Praesentium distinctio ipsa excepturi
      provident, ea quo, saepe impedit incidunt
      ducimus nulla quaerat amet cupiditate minus
      soluta possimus voluptatem cum rem vel!
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      Praesentium distinctio ipsa excepturi
      provident, ea quo, saepe impedit incidunt
      ducimus nulla quaerat amet cupiditate minus
      soluta possimus voluptatem cum rem vel!
    </ProjectPageComponent>
  )
}

export default page