!function(){function t(t){var e=new Image;return e.src=t.toDataURL("image/jpeg"),e}function e(t){var e=(t.naturalWidth,t.naturalHeight),a=document.createElement("canvas");a.width=1,a.height=e;var r=a.getContext("2d");r.drawImage(t,0,0);for(var n=r.getImageData(0,0,1,e).data,i=0,o=e,g=e;g>i;){var s=n[4*(g-1)+3];0===s?o=g:i=g,g=o+i>>1}var c=g/e;return 0===c?1:c}function a(t,a,r,n,i,o,g,s,c,u){var d=e(a);t.drawImage(a,r*d,n*d,i*d,o*d,g,s,c,u)}window.compressImg=function(e,r,n,i){var o=document.getElementById(e),g=document.getElementById(r),s=document.createElement("canvas"),c=g.src;if(s.getContext)var u=s.getContext("2d");else alert("对不起，您的浏览器不支持图片压缩及上传功能，请换个浏览器试试~");o.addEventListener("change",function(){var e=this,r=new Image,o=new FileReader;o.onload=function(o){var d=o.target.result;r.src="image"!=d.substring(5,10)?d.replace(/(.{5})/,"$1image/jpeg;"):d,r.onload=function(){var o=r.width,d=r.height,h=1;EXIF.getData(r,function(){h=parseInt(EXIF.getTag(r,"Orientation")),h=h?h:1});var l=n*d/o;return 10>o||10>o?(alert("请不要上传过小的图片"),g.src=c,e.value="",!1):(4>=h?(s.setAttribute("height",l),s.setAttribute("width",n),(3==h||4==h)&&(u.translate(n,l),u.rotate(180*Math.PI/180))):(s.setAttribute("height",n),s.setAttribute("width",l),5==h||6==h?(u.translate(l,0),u.rotate(90*Math.PI/180)):(7==h||8==h)&&(u.translate(0,n),u.rotate(270*Math.PI/180))),a(u,r,0,0,o,d,0,0,n,l),g.src=t(s).src,e.value="",void 0!=i&&i(g.src),void 0)}},o.readAsDataURL(this.files[0])},!1)}}();