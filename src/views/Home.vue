<template>
  <div class="home">
    <div class="login">
      <div class="id">可视化展示</div>

      <div class="a">
        <input
          type="text"
          placeholder=""
          v-model.lazy="id"
          :style="istf ? 'border-color: red;' : ''"
          required
        />
        <label>账号昵称</label>
      </div>

      <div class="b">
        <input
          type="password"
          placeholder=""
          v-model.lazy="pwd"
          :style="ispwd ? 'border-color: red;' : ''"
          required
        />
        <label>密码</label>
      </div>

      <div class="dl" style="cursor: pointer" @click="log">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      id: "",
      pwd: "",
      istf: false,
      ispwd: false,
    };
  },
  components: {},
  methods: {
    getspan() {
      const labels = document.querySelectorAll("label");
      labels.forEach((label) => {
        label.innerHTML = label.innerText
          .split("")
          .map(
            (letter, idx) =>
              `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
          )
          .join("");
      });
    },
    log() {
      if (this.ispwd == false && this.istf == false) {
        this.$router.push("/Data");
      } else {
        alert("请好好检查您的账号和密码！！");
        this.pwd = "";
        this.ispwd = false;
      }
    },
    changeOpacityAndPosition() {
      var ds = document.querySelectorAll(".fontClass");
      for (var i = 0; i < ds.length; i++) {
        var d = ds[i];
        // 透明度
        var op = d.style.opacity;
        op = parseFloat(op);
        op += d.speedOpacity;
        if (op >= 1 || op <= 0) {
          d.speedOpacity *= -1;
        }
        d.style.opacity = op;
        // 移动
        var x = d.offsetLeft + d.speedX;
        var y = d.offsetTop + d.speedY;
        // 撞墙X
        if (x < 0) {
          x = 0;
          d.speedX *= -1;
        } else if (x > window.innerWidth - d.offsetWidth) {
          x = window.innerWidth - d.offsetWidth;
          d.speedX *= -1;
        }
        // 撞墙Y
        if (y < 0) {
          y = 0;
          d.speedY *= -1;
        } else if (y > window.innerHeight - d.offsetHeight) {
          y = window.innerHeight - d.offsetHeight;
          d.speedY *= -1;
        }
        d.style.left = x + "px";
        d.style.top = y + "px";
      }
    },
    rand(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
  },
  watch: {
    id() {
      if (/^[a-zA-Z0-9]{3,10}$/.test(this.id)) {
        console.log(1);
        this.istf = false;
      } else {
        console.log("错误");
        this.istf = true;
      }
    },
    pwd() {
      if (/^[a-zA-Z0-9]{3,10}$/.test(this.pwd)) {
        console.log(1);
        this.ispwd = false;
      } else {
        this.ispwd = true;
        console.log("错误");
      }
    },
  },
  mounted() {
    this.getspan();
    let heom = document.querySelector(".home");
    for (var i = 0; i < 60; i++) {
      var num = document.querySelectorAll(".fontClass").length;
      if (num > 60) {
        break;
      }
      var d = document.createElement("div");
      d.className = "fontClass";
      var cm = this.rand(10, 150);
      // 泡泡大小
      d.style.width = cm + "px";
      d.style.height = cm + "px";
      // 泡泡位置
      d.style.left = this.rand(0, window.innerWidth - 150) + "px";
      d.style.top = this.rand(0, window.innerHeight - 150) + "px";
      // 泡泡颜色
      var r = this.rand(0, 255);
      var g = this.rand(0, 255);
      var b = this.rand(0, 255);
      var color = `rgb(${r},${g},${b})`;
      d.style.backgroundColor = color;
      // 设置透明度
      var op = Math.random();
      d.style.opacity = op;

      //			手动为div创造一个属性speed
      d.speedOpacity = 0.01;
      if (0.5 - Math.random() > 0) {
        d.speedOpacity = -0.01;
      }
      d.speedX = this.rand(2, 4);
      if (0.5 - Math.random() > 0) {
        d.speedX *= -1;
      }
      d.speedY = this.rand(2, 4);
      if (0.5 - Math.random() > 0) {
        d.speedY *= -1;
      }

      heom.appendChild(d);
    }
    const aa = setInterval(() => {
      this.changeOpacityAndPosition();
    }, 30);
  },
};
</script>

<style lang="less">
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?cs=srgb&dl=pexels-anna-shvets-3683056.jpg&fm=jpg)
    no-repeat center center;
  background-size: cover;
}
body {
  overflow: hidden;
  /*溢出隐藏*/
  /*解决塌陷*/
  /*清除浮动*/
}

.fontClass {
  position: absolute;
  border-radius: 50%;
}
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 450px;
  background-color: #fff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  z-index: 999;
  input {
    width: 400px;
    height: 40px;
    margin-left: 0%;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 25px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
  }
}
.id {
  font-size: 30px;
  font-weight: 700;
}
.dl {
  width: 400px;
  height: 60px;
  background-color: rgb(49, 210, 210);
  margin-left: 16%;
  border-radius: 30px;
  line-height: 60px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 40px;
}
.a label {
  position: absolute;
  left: 100px;
  top: 146px;
}
.b label {
  position: absolute;
  left: 100px;
  top: 229px;
}

label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  /* 动画时间，运动速度轨迹 */
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: rgb(135, 132, 132);
}

input:focus + label span,
input:valid + label span {
  color: rgb(17, 18, 18);
  transform: translateY(-30px);
}
</style>
