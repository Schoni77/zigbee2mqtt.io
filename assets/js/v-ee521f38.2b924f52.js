"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10746],{975863:(e,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o=JSON.parse('{"key":"v-ee521f38","path":"/devices/EFEKTA_miniPWS.html","title":"Custom devices (DiY) EFEKTA_miniPWS control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Custom devices (DiY) EFEKTA_miniPWS control via MQTT","description":"Integrate your Custom devices (DiY) EFEKTA_miniPWS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-08-01T20:41:55.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Build guide","slug":"build-guide","link":"#build-guide","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Soil moisture (numeric)","slug":"soil-moisture-numeric","link":"#soil-moisture-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Report delay (numeric)","slug":"report-delay-numeric","link":"#report-delay-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1710532040000},"filePathRelative":"devices/EFEKTA_miniPWS.md"}')},317065:(e,i,t)=>{t.r(i),t.d(i,{default:()=>f});var o=t(166252);const n=(0,o._)("h1",{id:"custom-devices-diy-efekta-minipws",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#custom-devices-diy-efekta-minipws","aria-hidden":"true"},"#"),(0,o.Uk)(" Custom devices (DiY) EFEKTA_miniPWS")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"EFEKTA_miniPWS")],-1),r=(0,o._)("td",null,"Vendor",-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Mini plant wattering sensor")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"soil_moisture, battery, report_delay, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_miniPWS.png",alt:"Custom devices (DiY) EFEKTA_miniPWS"})])],-1),c=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),h={href:"http://efektalab.com/miniPWS",target:"_blank",rel:"noopener noreferrer"},m=(0,o._)("h3",{id:"build-guide",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#build-guide","aria-hidden":"true"},"#"),(0,o.Uk)(" Build guide")],-1),p={href:"https://github.com/smartboxchannel/Plant-Watering-Sensor-Zigbee",target:"_blank",rel:"noopener noreferrer"},_=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),b=(0,o.uE)('<ul><li><p><code>soil_moisture_calibration</code>: Calibrates the soil_moisture value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>soil_moisture_precision</code>: Number of digits after decimal point for soil_moisture, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="soil-moisture-numeric" tabindex="-1"><a class="header-anchor" href="#soil-moisture-numeric" aria-hidden="true">#</a> Soil moisture (numeric)</h3><p>Measured soil moisture value. Value can be found in the published state on the <code>soil_moisture</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="report-delay-numeric" tabindex="-1"><a class="header-anchor" href="#report-delay-numeric" aria-hidden="true">#</a> Report delay (numeric)</h3><p>Adjust Report Delay, by default 60 minutes. Value can be found in the published state on the <code>report_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;report_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>180</code>. The unit of this value is <code>min</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),v={},f=(0,t(983744).Z)(v,[["render",function(e,i){const t=(0,o.up)("RouterLink"),v=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),n,(0,o._)("table",null,[a,(0,o._)("tbody",null,[l,(0,o._)("tr",null,[r,(0,o._)("td",null,[(0,o.Wm)(t,{to:"/supported-devices/#v=Custom%20devices%20(DiY)"},{default:(0,o.w5)((()=>[(0,o.Uk)("Custom devices (DiY)")])),_:1})])]),d,s,u])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,(0,o._)("p",null,[(0,o._)("a",h,[(0,o.Uk)("Mini plant wattering sensor"),(0,o.Wm)(v)])]),m,(0,o._)("p",null,[(0,o.Uk)("Instructions on how to build this device can be found "),(0,o._)("a",p,[(0,o.Uk)("here"),(0,o.Wm)(v)])]),(0,o.kq)(" Notes END: Do not edit below this line "),_,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),b])}]])}}]);