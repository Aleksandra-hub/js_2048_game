!function(){var t={};function e(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=Array(e);r<e;r++)i[r]=t[r];return i}function n(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=function(){var t,r;function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.getInitialStateDefault();!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,i),this.setBoard=JSON.parse(JSON.stringify(t)),this.board=JSON.parse(JSON.stringify(t)),this.score=0,this.status=i.IDLE}return r=[{key:"getInitialStateDefault",value:function(){return[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}}],t=[{key:"moveLeft",value:function(){if(this.canMoveLeft()&&this.status===i.PLAYING){for(var t=0;t<i.ROWS;t++){var e=this.board[t];e=this.slide(e),this.board[t]=e}return this.setTwo(),this.checkLose(),this.checkWin(),!0}return!1}},{key:"moveRight",value:function(){if(this.canMoveRight()&&this.status===i.PLAYING){for(var t=0;t<i.ROWS;t++){var e=this.board[t];e.reverse(),e=this.slide(e),this.board[t]=e.reverse()}return this.setTwo(),this.checkLose(),this.checkWin(),!0}return!1}},{key:"moveUp",value:function(){if(this.canMoveUp()&&this.status===i.PLAYING){for(var t=0;t<i.COLUMNS;t++){var e=[this.board[0][t],this.board[1][t],this.board[2][t],this.board[3][t]];e=this.slide(e);for(var r=0;r<i.ROWS;r++)this.board[r][t]=e[r]}return this.setTwo(),this.checkLose(),this.checkWin(),!0}return!1}},{key:"moveDown",value:function(){if(this.canMoveDown()&&this.status===i.PLAYING){for(var t=0;t<i.COLUMNS;t++){var e=[this.board[0][t],this.board[1][t],this.board[2][t],this.board[3][t]];e.reverse(),(e=this.slide(e)).reverse();for(var r=0;r<i.ROWS;r++)this.board[r][t]=e[r]}return this.setTwo(),this.checkLose(),this.checkWin(),!0}return!1}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.board}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.setTwo(),this.setTwo(),this.status=i.PLAYING}},{key:"restart",value:function(){this.score=0,this.board=JSON.parse(JSON.stringify(this.setBoard)),this.status=i.IDLE}},{key:"setTwo",value:function(){if(this.hasEmptyTile())for(var t=!1,e=0,r=0,n=0;!t;)e=Math.floor(Math.random()*i.ROWS),r=Math.floor(Math.random()*i.COLUMNS),0===this.board[e][r]&&(n=Math.random()>.1?2:4,this.board[e][r]=n,t=!0)}},{key:"hasEmptyTile",value:function(){for(var t=0;t<i.ROWS;t++)for(var e=0;e<i.COLUMNS;e++)if(0===this.board[t][e])return!0;return!1}},{key:"filterZero",value:function(t){return t.filter(function(t){return 0!==t})}},{key:"slide",value:function(t){var e=t;if(0===(e=this.filterZero(t)).length)return[0,0,0,0];for(var r=0;r<e.length-1;r++)e[r]===e[r+1]&&(e[r]*=2,e[r+1]=0,this.score+=e[r]);for(e=this.filterZero(e);e.length<i.ROWS;)e.push(0);return e}},{key:"checkWin",value:function(){for(var t=0;t<i.ROWS;t++)for(var e=0;e<i.COLUMNS;e++)2048===this.board[t][e]&&(this.status=i.WIN)}},{key:"checkLose",value:function(){-1===[this.hasEmptyTile(),this.canMoveLeft(),this.canMoveRight(),this.canMoveUp(),this.canMoveDown()].indexOf(!0)&&(this.status=i.LOSE)}},{key:"canMoveLeft",value:function(){for(var t=0;t<i.ROWS;t++){var e=Array.from(this.board[t]),r=this.canSlide(e);if(!this.isArrayTheSame(e,r))return!0}return!1}},{key:"canMoveRight",value:function(){for(var t=0;t<i.ROWS;t++){var e=Array.from(this.board[t]),r=this.canSlide(e.reverse());if(!this.isArrayTheSame(e,r))return!0}return!1}},{key:"canMoveUp",value:function(){for(var t=0;t<i.COLUMNS;t++){var e=Array.from([this.board[0][t],this.board[1][t],this.board[2][t],this.board[3][t]]),r=this.canSlide(n(e));if(!this.isArrayTheSame(e,r))return!0}return!1}},{key:"canMoveDown",value:function(){for(var t=0;t<i.COLUMNS;t++){var e=Array.from([this.board[0][t],this.board[1][t],this.board[2][t],this.board[3][t]]),r=this.canSlide(n(e).reverse()).reverse();if(!this.isArrayTheSame(e,r))return!0}return!1}},{key:"isArrayTheSame",value:function(t,e){for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}},{key:"canSlide",value:function(t){var e=t;if(0===(e=this.filterZero(t)).length)return[0,0,0,0];for(var r=0;r<e.length-1;r++)e[r]===e[r+1]&&(e[r]*=2,e[r+1]=0);for(e=this.filterZero(e);e.length<i.ROWS;)e.push(0);return e}}],e(i.prototype,t),r&&e(i,r),i}();r(a,"ROWS",4),r(a,"COLUMNS",4),r(a,"IDLE","idle"),r(a,"PLAYING","playing"),r(a,"WIN","win"),r(a,"LOSE","lose");var o=new(t=a),s=document.querySelector(".button"),c=document.querySelector(".message-start"),u=document.querySelector(".message-win"),f=document.querySelector(".message-lose");function h(t,e){t.textContent="",t.classList.value="",t.classList.add("field-cell"),e>0&&(t.innerText=e.toString(),t.classList.add("field-cell--"+e.toString()))}function l(){for(var e=0;e<t.ROWS;e++)for(var r=0;r<t.COLUMNS;r++){var i=o.board[e][r];h(document.getElementById(e.toString()+"-"+r.toString()),i)}}function d(){o.getStatus()===t.WIN&&u.classList.remove("hidden")}function v(){o.getStatus()===t.LOSE&&f.classList.remove("hidden")}s.onclick=function(){s.classList.contains("start")?(s.classList.remove("start"),s.classList.add("restart"),s.innerText="Restart",c.classList.add("hidden"),o.start(),function(){for(var e=0;e<t.ROWS;e++)for(var r=0;r<t.COLUMNS;r++){var i=o.setBoard[e][r];h(document.getElementById(e.toString()+"-"+r.toString()),i)}}(),l()):s.classList.contains("restart")&&(s.classList.remove("restart"),s.classList.add("start"),s.innerText="Start",c.classList.remove("hidden"),o.restart(),document.querySelectorAll(".field-cell").forEach(function(t){t.innerText="",t.classList.value="",t.classList.add("field-cell")}),document.querySelector(".game-score").innerText="0",u.classList.contains("hidden")||document.querySelector(".message-win").classList.add("hidden"),f.classList.contains("hidden")||document.querySelector(".message-lose").classList.add("hidden"))},document.addEventListener("keyup",function(e){switch(e.code){case"ArrowLeft":(function(){if(o.moveLeft()){l(),d(),v();for(var e=0;e<t.ROWS;e++)for(var r=0;r<t.COLUMNS;r++){var i=o.board[e][r];h(document.getElementById(e.toString()+"-"+r.toString()),i)}}})();break;case"ArrowRight":(function(){if(o.moveRight()){l(),d(),v();for(var e=0;e<t.ROWS;e++)for(var r=0;r<t.COLUMNS;r++){var i=o.board[e][r];h(document.getElementById(e.toString()+"-"+r.toString()),i)}}})();break;case"ArrowUp":(function(){if(o.moveUp()){l(),d(),v();for(var e=0;e<t.ROWS;e++)for(var r=0;r<t.COLUMNS;r++){var i=o.board[e][r];h(document.getElementById(e.toString()+"-"+r.toString()),i)}}})();break;case"ArrowDown":(function(){if(o.moveDown()){l(),d(),v();for(var e=0;e<t.ROWS;e++)for(var r=0;r<t.COLUMNS;r++){var i=o.board[e][r];h(document.getElementById(e.toString()+"-"+r.toString()),i)}}})()}document.querySelector(".game-score").innerText=o.getScore()})}();
//# sourceMappingURL=index.e1b7ad27.js.map
