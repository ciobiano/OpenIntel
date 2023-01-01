import React from 'react';
import { Meta, OpenAi, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={Meta}  alt="Meta"/>
    </div>
    <div>
      <img src={OpenAi} alt="OpenAI" />
    </div>
    <div>
      <img src={atlassian} alt="atlassian" />
    </div>
    <div>
      <img src={dropbox} alt="Dropbox" />
    </div>
    <div>
      <img src={shopify} alt="Shopify" />
    </div>
  </div>
);

export default Brand;
