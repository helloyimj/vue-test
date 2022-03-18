<template>
  <div id="app">
    <!-- <header-comp></header-comp> -->
    <div class="wrap-user">
        <!-- login start -->
        <div class="page-login">
          <div class="wrapper">
            <div class="box-tit">
              <h3>로그인</h3>
            </div>
            <div class="box-img">
              <img src="./assets/img/login/ldgin-img1.png" alt="로그인 일러스트">
            </div>
            <div class="box-input">
              <ul>
                <li>
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <input type="text" name="inputUserId" id="inputUserId" maxLength="20"
                    placeholder="아이디를 입력해주세요">
                    <div class="box-msg">
                      <span class="red-msg">아이디를 다시 확인해주세요.</span>
                      <!-- <span class="red-msg">CAPS LOOK 이 켜져 있습니다. (대문자 입니다)</span> -->
                    </div>
                </li>

                <li>
                  <i class="fa fa-lock" aria-hidden="true"></i>
                  <input type="password" name="inputPassword" id="inputPassword" maxLength="20"
                    placeholder="비밀번호를 입력해주세요">
                    <div class="box-msg">
                      <!-- <span class="red-msg">비밀번호를 다시 확인해주세요.</span> -->
                      <!-- <span class="red-msg">비밀번호는 8자리 ~ 20자리 이내로 입력해주세요.</span> -->
                      <span class="red-msg">비밀번호는 영문, 숫자, 특수문자를 혼합하여 입력해주세요.</span>
                      <!-- <span class="red-msg">CAPS LOOK 이 켜져 있습니다. (대문자 입니다)</span> -->
                    </div>
                </li>
              </ul>
              <a href="/" class="btn-org" role="button">로그인</a>

            </div>

            <div class="box-find">
              <div class="auto-login">
                <input type="checkbox" id="autoLogin" name="autoLogin">
                <label for="autoLogin"><span>자동 로그인</span></label>
              </div>
              <div class="wrap-find">
                <a href="find.html">아이디 찾기</a>
                <a href="find.html">비밀번호 찾기</a>
              </div>
            </div>

            <div class="box-sns">
              <div class="tit">
                <h4>간편 로그인</h4>
              </div>
              <ul>
                <li>
                  <a class="btn-sns kakao" role="button">카카오 로그인</a>
                </li>
                <li>
                  <a class="btn-sns naver" role="button">네이버 로그인</a>
                </li>
              </ul>
            </div>

            <div class="box-join">
              <span>지금 가입하고 오슬만의 서비스를 받아보세요</span>
              <a href="joinSelect.html" class="btn-join">회원 가입</a>
            </div>

          </div>
          
        </div>
        <!-- login end-->

    </div>
   <footer-comp></footer-comp>
  </div>
</template>

<script>
// import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    // "header-comp": Header,
    "footer-comp": Footer
  },
}
</script>

<style lang="scss">
.wrap-user {
	position: relative;
	width: 100%;
	height: 100%;
	// background-color: #dddddd;
	background-color: #fff;
	font-family: 'NotoR', sans-serif;

	>div {
		position: relative;
		width: 430px;
		min-height: 100vh;
		height: 100%;
		margin: 0 auto;
		padding-top: 60px;
		background-color: #fff;

		>.wrapper {
			margin: 0 auto;
		}

	}
}


.page-login {
	position: relative;
	width: 100%;
	height: 100%;

	.wrapper {
		width: 100%;
		max-width: 340px;
		margin: 0 auto;
	}

	.box-tit {
		margin: 10px auto 60px;
		text-align: center;

		h3 {
			line-height: 20px;
			font-size: 20px;
			color: #555;
			font-family: 'Youth', sans-serif;
		}
	}

	.box-img {
		width: auto;
		height: 240px;
		margin-bottom: 60px;
		text-align: center;

		img {
			width: auto;
			height: 100%;
		}
	}

	.box-input {
		position: relative;
		>ul {
			li {
					width: 100%;
				i {
					line-height: 40px;
					font-size: 16px;
					color: #ff7e00;
					text-indent: 5px;
					display: inline-block;
					position: absolute;
					// margin-top: 10px;
				}

				input {
					width: 100%;
					height: 40px;
					line-height: 40px;
					outline: 0;
					border: none;
					border-bottom: 2px solid #ff7e00;
					text-indent: 26px;
					font-size: 16px;
				}

				input:focus {
					border: 2px solid #ff7e00 !important;
				}

				input::placeholder {
					line-height: 34px;
					font-size: 16px;
				}

				// &:first-child {
				// 	margin-bottom: 20px;
				// }
			}
		}

		.btn-org {
			width: 170px;
			font-size: 18px;
			font-family: 'Youth', sans-serif;
			margin-bottom: 40px;

		}

		.box-msg {
			// position: absolute;
			height: 40px;
			line-height: 40px;
			// margin-bottom: 20px;
		}
	}

	.box-find {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 40px;
		line-height: 39px;
		font-size: 14px;
		color: #555;
		border-bottom: 1px solid #ddd;

		.auto-login {

			/* checkbox */
			input[type="checkbox"] {
				position: absolute;
				width: 1px;
				height: 1px;
				padding: 0;
				margin: -1px;
				overflow: hidden;
				clip: rect(0, 0, 0, 0);
				border: 0;
			}

			input[type="checkbox"]+label {
				display: inline-block;
				position: relative;
				cursor: pointer;
				user-select: none;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				color: #666;
				font-size: 14px;
			}

			input[type="checkbox"]+label:before {
				content: '';
				display: inline-block;
				width: 10px;
				height: 10px;
				line-height: 10px;
				margin: -2px 6px 0 0;
				font-size: 10px;
				text-align: center;
				vertical-align: middle;
				background: #fff;
				border: 1px solid #666;
			}

			input[type="checkbox"]:checked+label:before {
				content: '\2714';
				color: #ff7e00 !important;
				background: #fff;
				border-color: #ff7e00;
			}

			input[type="checkbox"]:checked+label span {
				color: #ff7e00;
			}
			/*  checkbox end */
		}

		.wrap-find {
			display: flex;
			justify-content: space-between;
			width: 180px;

			a {

				// display: inline-block;
				// width: 95px;
				&:hover {
					color: #ff7e00;
				}
			}

		}


	}

	.box-sns {

		.tit {
			margin-top: 20px;
			margin-bottom: 20px;

			h4 {
				font-size: 13px;
				color: #555;
			}
		}

		>ul {
			font-family: 'Youth', sans-serif;

			// display: flex;
			li {
				width: 100%;
				height: 40px;
				line-height: 40px;
				margin-bottom: 20px;

				.btn-sns {
					display: block;
					border-radius: 5px;
					font-size: 16px;
					text-align: center;
					cursor: pointer;
					-ms-user-select: none;
					-moz-user-select: -moz-none;
					-webkit-user-select: none;
					-khtml-user-select: none;
					user-select: none;

					&.kakao {
						color: #381e1e;
						background: url('./assets/img/login/sns/kakao.svg');
						background-color: #ffe600;
						background-repeat: no-repeat;
						background-size: 36px;
						background-position: 80px center;
					}

					&.naver {
						color: #fff;
						background: #03cf5d url('./assets/img/login/sns/naver.svg');
						background-repeat: no-repeat;
						background-size: 36px;
						background-position: 80px center;
					}
					// 21-12-20 페이스북 추가
					&.facebook {
						color: #fff;
						background: #3959a0 url('./assets/img/login/sns/facebook.svg');
						background-repeat: no-repeat;
						background-size: 36px;
						background-position: 80px center;
					}
				}
			}
		}

	}

	.box-join {
		display: flex;
		justify-content: space-between;
		line-height: 20px;
		margin-top: 20px;
		margin-bottom: 20px;

		span {
			font-size: 14px;
			color: #555;
		}

		.btn-join {
			color: #ff7e00;
			font-size: 14px;
		}
	}










}
</style>