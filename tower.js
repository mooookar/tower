const sprites = new Image();
sprites.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAABuCAMAAAB7ho3NAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbdEVYdFNvZnR3YXJlAENlbHN5cyBTdHVkaW8gVG9vbMGn4XwAAAAJcEhZcwAACxIAAAsSAdLdfvwAAABmUExURUdwTP///////////////////////////////////////////////////////////15ocv///////////////15ockdSXXyDiy4zOV5ocgD/AP/XAAD/5nmNjlk1Jmx+kHRMO3uFj+Oq+O8AAAAWdFJOUwBaNVlGljYnG26DgqqXq0f+HG0mrP0844E0AAAI/UlEQVR42u2ciWLbNgxAuS1d263tsgsUeq7//5MTTxwED9mOkzilIguGKJlP4AmRcXjDwXXPeH/FZPgUlHgkwiE4v22+l45GBzFIqcgUBnH3X9vyDzJRJmccIYcvezgdzhs3hi1unktVpi1p8224tIeYYNQiC9MI379/X4YD76HD1tABbLhvMcFFqlrargeXCftlDgCX4VLqPZeqTNsV4L4twnVz69O03BcB920Px+Egljl4epbLcIHpZLhQFtvCqOtpUX3XMIp7PlzMietw/3bKIizHvT/w1I7cYXrfDHePDxPuz6Y9/w4Obzi4tp+VvutcXYqJpZ12QGZabwSjk6PKrOz51O8Ux7UNWvqu4UrSTC1rHkg+oAUj5CTyHyuNEab6GrhaHP0WO1juWBveiXsuXL9N5TVzgcOgZvaXbCHpPt3Y9YYBMBwcSLv60Fh5LQutp4zNWgW7G063ZXD1umATgxmhbZpcz1YwtKDKtMCikcy19n2K0i5z8VCL0ZbtWAW6Uj+0nM9PrS1VUrtws2zeGRxloHqMcD4VtUQBOutmZroaBrWl1iZbFYvRIzfSDkZGOVSGLXYymKh5fcmjVm7t1pZaK+HoZ3U2VmX7PDh2PTeYqBeL5VBYLuK7gxkRDJYB3EyJozInMixvIHVzAahz69EeygTugBGw46awnBILD93oHVyw+8UeLC/QZoIPaLvWNA1tRXXnJ4JKaeMKQl7v8UeBrE5TtqvDDl923/q7lKY2HDKqC90EUHscdUYphFbLz3hVoSPHoAFS0+JBaihAaDO3aR/kY9ux9UqUCOdNOG/C+TEc5+ApRd2lAFClkOUO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";

let zzfxV = 0.3,
  zzfxX = new AudioContext(),
  zzfx = (
    p = 1,
    k = 0.05,
    b = 220,
    e = 0,
    r = 0,
    t = 0.1,
    q = 0,
    D = 1,
    u = 0,
    y = 0,
    v = 0,
    z = 0,
    l = 0,
    E = 0,
    A = 0,
    F = 0,
    c = 0,
    w = 1,
    m = 0,
    B = 0,
    N = 0
  ) => {
    let M = Math,
      d = 2 * M.PI,
      R = 44100,
      G = (u *= (500 * d) / R / R),
      C = (b *= ((1 - k + 2 * k * M.random((k = []))) * d) / R),
      g = 0,
      H = 0,
      a = 0,
      n = 1,
      I = 0,
      J = 0,
      f = 0,
      h = N < 0 ? -1 : 1,
      x = (d * h * N * 2) / R,
      L = M.cos(x),
      Z = M.sin,
      K = Z(x) / 4,
      O = 1 + K,
      X = (-2 * L) / O,
      Y = (1 - K) / O,
      P = (1 + h * L) / 2 / O,
      Q = -(h + L) / O,
      S = P,
      T = 0,
      U = 0,
      V = 0,
      W = 0;
    e = R * e + 9;
    m *= R;
    r *= R;
    t *= R;
    c *= R;
    y *= (500 * d) / R ** 3;
    A *= d / R;
    v *= d / R;
    z *= R;
    l = (R * l) | 0;
    p *= zzfxV;
    for (h = (e + m + r + t + c) | 0; a < h; k[a++] = f * p)
      ++J % ((100 * F) | 0) ||
        ((f = q
          ? 1 < q
            ? 2 < q
              ? 3 < q
                ? Z(g ** 3)
                : M.max(M.min(M.tan(g), 1), -1)
              : 1 - (((((2 * g) / d) % 2) + 2) % 2)
            : 1 - 4 * M.abs(M.round(g / d) - g / d)
          : Z(g)),
        (f =
          (l ? 1 - B + B * Z((d * a) / l) : 1) *
          (f < 0 ? -1 : 1) *
          M.abs(f) ** D *
          (a < e
            ? a / e
            : a < e + m
            ? 1 - ((a - e) / m) * (1 - w)
            : a < e + m + r
            ? w
            : a < h - c
            ? ((h - a - c) / t) * w
            : 0)),
        (f = c
          ? f / 2 +
            (c > a
              ? 0
              : ((a < h - c ? 1 : (h - a) / c) * k[(a - c) | 0]) / 2 / p)
          : f),
        N
          ? (f = W = S * T + Q * (T = U) + P * (U = f) - Y * V - X * (V = W))
          : 0),
        (x = (b += u += y) * M.cos(A * H++)),
        (g += x + x * E * Z(a ** 5)),
        n && ++n > z && ((b += v), (C += v), (n = 0)),
        !l || ++I % l || ((b = C), (u = G), (n = n || 1));
    p = zzfxX.createBuffer(1, h, R);
    p.getChannelData(0).set(k);
    b = zzfxX.createBufferSource();
    b.buffer = p;
    b.connect(zzfxX.destination);
    b.start();
  };

const canvas = document.getElementById("cnvs");
const ratio = Math.round(window.innerWidth / 500);
canvas.width = window.innerWidth / ratio;
canvas.height = window.innerHeight / ratio;
canvas.style.zoom = `calc(${ratio} * 100%)`;
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = !1;

const arc = (ctx, x, y, rad) => {
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
};

const bg = document.createElement("canvas");
bg.width = canvas.width;
bg.height = canvas.height;
const bgctx = bg.getContext("2d");
bgctx.fillStyle = "white";
for (let i = 0; i < (canvas.width * canvas.height) / 2000; i++) {
  const size = Math.random() * 1 + 1;
  bgctx.fillRect(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    size,
    size
  );
}
const dataURL = bg.toDataURL("image/png");
canvas.style.backgroundImage = `url('${dataURL}')`;

const fcanvas = document.createElement("canvas");
fcanvas.width = fcanvas.height = 14;
const fctx = fcanvas.getContext("2d");
fctx.fillStyle = "#00aaFF55";
fctx.arc(7, 7, 7, 0, Math.PI * 2);
fctx.fill();
fctx.fillStyle = "#0088DD";
fctx.fillRect(3, 3, 8, 8);
fctx.fillStyle = "#00aaFF";
fctx.fillRect(3, 3, 8, 1);
fctx.fillRect(4, 3, 4, 7);
fctx.beginPath();
fctx.fillStyle = "#FFFFFF";
arc(fctx, 7.5, 8, 1.5);
fctx.fillRect(5, 6, 1, 1);
fctx.fillRect(7, 5, 1, 1);
fctx.fillRect(9, 6, 1, 1);
fctx.closePath();

const foodDataURL = fcanvas.toDataURL("image/png");
const food = new Image();
food.src = foodDataURL;

const PLATFORM_WIDTH = 22;
const PLATFORM_HEIGHT = 11;
let globalAngle = 0;
let globalVelocity = 0;
let globalHeight = 0;
let floorCollision;
let jumped = !1;
let cannotJump = !1;
let heightRecord = 0;
let energy = 100;
let message = {
  text: "Reach the top!",
  transparency: 255,
  warningDisplayed: !1,
};
let gameOver = !1;

const markers = [
  { text: "0m", height: 0 },
  { text: "10m", height: 1000 },
  { text: "100m", height: 10000 },
  { text: "Eiffel Tower", height: 33000 },
  { text: "Taipei 101", height: 50800 },
  { text: "Tokyo SKYTREE", height: 63400 },
  { text: "Burj Khalifa", height: 82990 },
  { text: "1km", height: 100000 },
  { text: "Fuji", height: 377624 },
];
class Player {
  constructor() {
    this.height = canvas.height + platforms[5][0].height;
    this.velocity = 1;
    this.inAir = !1;
    this.minHeight = this.height;
  }
  jump() {
    if (cannotJump) {
      return;
    }
    zzfx(
      1,
      0.5,
      210,
      0.01,
      0,
      0.05,
      0,
      3.6,
      0,
      65,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0.53,
      0.06,
      0,
      0
    );
    this.velocity = -9;
    this.inAir = !0;
  }
  stop() {
    this.velocity = 1;
    this.inAir = !1;
  }
  draw() {
    this.velocity += 1;
    if (this.velocity > 3) {
      this.velocity = 3;
    }
    this.height += this.velocity;
    this.minHeight = floorCollision
      ? canvas.height + globalHeight - floorCollision?.height - 4
      : canvas.height + globalHeight - platforms[5][0].height - 4;
    if (this.height > this.minHeight) {
      this.height = this.minHeight;
      this.stop();
    }

    ctx.fillStyle = "#FFFFFF11";
    arc(ctx, canvas.width / 2, this.height, 9);
    arc(ctx, canvas.width / 2, this.height, 12);
    arc(ctx, canvas.width / 2, this.height, 16);

    ctx.fillStyle = "black";
    arc(ctx, canvas.width / 2, this.height, 4);

    ctx.save();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.moveTo(
      canvas.width / 2 + Math.sin(globalAngle + 2.5) * 6,
      this.height + Math.cos(globalAngle + 2.5) * 6
    );
    ctx.lineTo(canvas.width / 2, this.height);
    ctx.lineTo(
      canvas.width / 2 + Math.sin(globalAngle + 3.5) * 6,
      this.height + Math.cos(globalAngle + 3.5) * 6
    );
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = `hsl(${Math.round(energy)} 100% 50%)`;
    arc(
      ctx,
      canvas.width / 2 + Math.sin(globalAngle + 2) * 3,
      this.height + Math.cos(globalAngle + 2) * 3,
      1.5
    );
    arc(
      ctx,
      canvas.width / 2 + Math.sin(globalAngle + 4) * 3,
      this.height + Math.cos(globalAngle + 4) * 3,
      1.5
    );
  }
}
class Platform {
  constructor(angle, height, type) {
    this.angle = angle;
    this.height = height;
    this.isFront = !0;
    this.initPoint = this.getInitPoint();
    this.faceInitPoint = this.getFaceInitPoint();
    this.faceType = Math.floor(Math.random() * 79.9);
    this.blink = !0;
    this.isBlink = Math.random() < 0.1;
    this.type = type;
    this.isFood = Math.round(Math.random() + globalHeight / 10000);
  }
  getInitPoint() {
    return (
      canvas.width / 2 -
      PLATFORM_WIDTH / 2 +
      Math.sin(((this.angle + globalAngle) * Math.PI) / 180) * 100
    );
  }
  getFaceInitPoint() {
    return (
      canvas.width / 2 +
      Math.sin(((this.angle + globalAngle) * Math.PI) / 180) * 110
    );
  }
  draw() {
    if (
      this.height === 0 ||
      this.height < globalHeight ||
      this.height - PLATFORM_HEIGHT > canvas.height + globalHeight
    ) {
      return;
    }
    if (Math.random() * 100 < 1) {
      this.blink = !this.blink;
    }
    const cos = Math.cos(((this.angle + globalAngle) * Math.PI) / 180);
    this.isFront = cos > 0 ? !0 : !1;
    const color = 64 * cos + 16;
    ctx.fillStyle = `rgb(${color},${color},${color})`;
    this.initPoint = this.getInitPoint();
    this.faceInitPoint = this.getFaceInitPoint();
    ctx.save();
    if (this.type === "energy") {
      if (this.isFood && message.warningDisplayed) {
        ctx.drawImage(
          food,
          0,
          0,
          14,
          14,
          this.initPoint + 5,
          canvas.height + globalHeight - this.height,
          14,
          14
        );
      }
      return;
    } else {
      ctx.fillRect(
        this.initPoint,
        canvas.height + globalHeight - this.height,
        PLATFORM_WIDTH,
        PLATFORM_HEIGHT + 0.5
      );
    }
    if (this.isFront) {
      ctx.drawImage(
        sprites,
        (Math.round(this.faceType) % 10) * PLATFORM_WIDTH,
        Math.round(this.faceType / 10) * PLATFORM_HEIGHT,
        PLATFORM_WIDTH,
        PLATFORM_HEIGHT,
        this.faceInitPoint - (PLATFORM_WIDTH / 2) * cos - 1,
        canvas.height + globalHeight - this.height,
        PLATFORM_WIDTH * cos + 2,
        PLATFORM_HEIGHT
      );
      if (this.isBlink) {
        const x = this.faceInitPoint + (this.faceType % 10) * cos - 1;
        const y =
          canvas.height + globalHeight - this.height + (this.faceType % 8);
        ctx.fillStyle = this.blink
          ? "#2F3338"
          : message.warningDisplayed
          ? "#FF0000"
          : "#05ff00";
        ctx.fillRect(x, y, 3, 3);
        if (!this.blink) {
          ctx.fillStyle += "55";
          arc(ctx, x + 2, y + 2, 6);
        }
      }
    }
    this.faceType < 10 &&
      ctx.drawImage(
        sprites,
        (Math.round(this.faceType) % 10) * PLATFORM_WIDTH,
        99.5,
        PLATFORM_WIDTH,
        PLATFORM_HEIGHT - 1,
        this.faceInitPoint - (PLATFORM_WIDTH / 2) * cos - 1,
        canvas.height + globalHeight - this.height - PLATFORM_HEIGHT + 1,
        PLATFORM_WIDTH * cos + 1,
        PLATFORM_HEIGHT - 1
      );
    ctx.restore();
  }
}
class Brick {
  constructor(angle, height) {
    this.angle = angle;
    this.height = height;
    this.isFront = !0;
    this.initPoint = this.getInitPoint();
  }
  getInitPoint() {
    return (
      canvas.width / 2 +
      Math.sin(((this.angle + globalAngle) * Math.PI) / 180) * 90
    );
  }
  draw() {
    const cos = Math.cos(((this.angle + globalAngle) * Math.PI) / 180);
    this.isFront = cos > 0 ? !0 : !1;
    if (
      !this.isFront ||
      this.height === 0 ||
      this.height < globalHeight ||
      this.height > canvas.height + globalHeight
    ) {
      return;
    }
    this.initPoint = this.getInitPoint();
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(
      this.initPoint - 1,
      canvas.height + globalHeight - this.height,
      PLATFORM_WIDTH * cos - 1,
      PLATFORM_HEIGHT
    );
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.moveTo(
      this.initPoint + (PLATFORM_WIDTH / 2) * cos,
      canvas.height + globalHeight - this.height
    );
    ctx.lineTo(
      this.initPoint + (PLATFORM_WIDTH / 2) * cos,
      canvas.height + globalHeight - this.height + PLATFORM_HEIGHT / 2
    );
    ctx.strokeRect(
      this.initPoint - 1,
      canvas.height + globalHeight - this.height + PLATFORM_HEIGHT / 2,
      PLATFORM_WIDTH * cos,
      PLATFORM_HEIGHT / 2
    );
    ctx.stroke();
    ctx.closePath();
  }
}
const map = [
  "000000000000000000000000000000",
  "000000000000000000000000000000",
  "000000000000000000000000000000",
  "000000000000000000000000000000",
  "000000000000000000000000000000",
  "111111111111111111111111111111",
  "000030030030030030030030030030",
];
const mapSegments = [
  [
    "0",
    "021111110001111110000000002000",
    "000000001110000001110000000000",
    "000000000000000000001111000000",
    "000111000000200000000000111111",
    "111000111001110011100000000000",
    "000000000010000030011111200000",
    "100000000000000000000000011111",
  ],
  [
    "0",
    "021001110000000011100000000010",
    "000110001111111100011110011100",
    "000000000000000000000000000000",
    "000000200000000002002000000000",
    "111111111111000111110000000111",
    "000000000003000000000000000000",
    "000000212000000000001111100000",
    "001111000001111111000000000000",
    "110000000000000000000000000000",
  ],
  [
    "0",
    "001111111111220000221111111110",
    "000000110001112222111000000000",
    "000000000000011111100000000000",
    "111100000000000000000000001111",
    "000000000222222222222000000000",
    "000000111111111111111111100000",
    "000000000000030111000000000000",
    "111000000000000000000000000111",
  ],
  [
    "0",
    "000000000000000000000000000001",
    "000000000000000000000000000010",
    "000000000000000000000000000100",
    "000000200002022000020000021000",
    "000000000222220000222222210000",
    "000022222222222222222222100000",
    "000222222222222222222221000000",
    "002222222222222222222210000000",
    "000002222222222222222100000000",
    "000022222222222222221000000000",
    "000222222222222222210000000000",
    "002222222222222222100000000000",
    "000222222222222221000000000000",
    "000022222222222210000000200000",
    "000000222222222100000000000000",
    "000022222222221000000000000200",
    "000002222222210000000000000000",
    "200000222222100000020000000022",
    "220000222221000000000000002222",
    "222000002210000000000002222222",
    "222200022100000000000000022222",
    "220000221000000000000002222222",
    "222002210000000000022222222222",
    "222002100000002000002222222222",
    "220021000000000000022222222222",
    "002210000000000022222222222222",
    "022100000000000111122222222222",
    "221000222222111222211111222222",
    "210000000000000000000000111122",
    "100000000000000000000000000011",
  ],
  [
    "0",
    "000000000000000000000000000001",
    "000000000000000000000000000010",
    "000000000000000000000000000100",
    "000000000000000000000000001000",
    "000000000000000000000000210000",
    "000000000000000000000000200000",
    "000000000000000000000001000000",
    "000000000000000000000010000000",
    "000000000000000000002100000000",
    "000000000000000000002000000000",
    "000000000000000000010000000000",
    "000000000000000000100000000000",
    "000000000000000021000000000000",
    "000000000000000020000000000000",
    "000000000000000100000000000000",
    "000000000000001000000000000000",
    "000000000000210000000000000000",
    "000000000000200000000000000000",
    "000000000001000000000000000000",
    "000000000010000000000000000000",
    "000000000100000000000000000000",
    "000000021000000000000000000000",
    "000000020000000000000000000000",
    "000000100000000000000000000000",
    "000001000000000000000000000000",
    "000010000000000000000000000000",
    "000100000000000000000000000000",
    "001000000000000000000000000000",
    "010000000000000000000000000000",
    "100000000000000000000000000011",
  ],
  [
    "0",
    "000000000000000000000000000001",
    "000000000000002000000000000010",
    "000000000000010000000000000100",
    "000000000000100000000000001000",
    "000000000001000011112111110000",
    "000000000010021100000000000000",
    "000000000200003000000002000000",
    "000000001000000000000020000000",
    "000000010000000000002200000000",
    "000000100000000000002000000000",
    "000002000000000000010000000000",
    "000010000000000000100000000000",
    "002100000000000021002112100000",
    "111000000000000020000000011211",
    "000000000000000100000000000000",
    "100000000000001000000000000000",
    "000000000000210000000000000001",
    "000000000000200000000000000010",
    "000000000001000000000000000200",
    "000000000010000000000000001000",
    "000000000100000000000000020000",
    "112111111000000000000000100000",
    "000000000000000000000021002111",
    "000000100000000000000010000000",
    "000001000000000000000200000000",
    "000010000000000000001000000000",
    "000100000000000000010000000000",
    "001000000000000000200000000000",
    "010000000000000001000000000000",
    "100000000000000000000000000011",
  ],
  [
    "0",
    "010000000000000000000000000000",
    "001220000000000000000000000000",
    "000122000000000000000000000000",
    "000012222222222222222222000000",
    "000001222222222222222222200000",
    "000000122222222222222222222000",
    "000000012222222222222222200000",
    "000000001222222222222222200000",
    "000000000122222222222222000000",
    "200000000012222222222222220000",
    "000000000001222222222222200000",
    "002000000000122222222222220000",
    "000000000000012222222222200000",
    "220002000000001222222222200000",
    "000000000000000122222222220000",
    "022200000000000012222222222200",
    "002000200000000001222222222000",
    "000000000000000000122222222200",
    "000022222000000000012222222000",
    "000000000222200000001222220000",
    "002200022222200000000122200000",
    "000000222222222200000012220000",
    "000022222222222222000001220000",
    "00022222222222222222000012200",
    "002222222222222222222000012000",
    "022222222222222222222200001200",
    "022222222222220000000000000120",
    "221111111122220002222220000012",
    "200100000011111110000000000001",
    "111000000000000000000000000000",
  ],
  [
    "0",
    "010000000000000000000000000000",
    "001000000000000000000000000000",
    "000120000000000000000000000000",
    "000020000000000000000000000000",
    "000001000000000000000000000000",
    "000000120000000000000000000000",
    "000000020000000000000000000000",
    "000000001000000000000000000000",
    "000000000100000000000000000000",
    "000000000010000000000000000000",
    "000000000001200000000000000000",
    "000000000000200000000000000000",
    "000000000000010000000000000000",
    "000000000000001000000000000000",
    "000000000000000100000000000000",
    "000000000000000012000000000000",
    "000000000000000002000000000000",
    "000000000000000000100000000000",
    "000000000000000000010000000000",
    "000000000000000000001000000000",
    "000000000000000000000120000000",
    "000000000000000000000020000000",
    "000000000000000000000001000000",
    "000000000000000000000000100000",
    "000000000000000000000000010000",
    "000000000000000000000000001000",
    "000000000000000000000000000100",
    "000000000000000000000000000010",
    "000000000000000000000000000001",
    "111000000000000000000000000000",
  ],
  [
    "0",
    "010000000000000000000000000000",
    "001000000000000001000000000000",
    "000120000000000000100000000000",
    "000020000000000000012000000000",
    "000001000000000000002000000000",
    "000000111111100000000100000000",
    "000000000000011211120010000000",
    "000000001000000000000001200000",
    "000000000100000000000000200000",
    "000000000010000000000000010000",
    "000000000001200000000000001000",
    "000000000000200000000000000100",
    "000000000000010000000000000012",
    "000000000000001000000000000002",
    "100000000000000200000000000000",
    "010000000000000012000000000000",
    "001000000000000001000000000000",
    "000111110000000000100000000000",
    "000000001111100000010000000000",
    "000001000030011112001000000000",
    "000000100000000000000120000000",
    "000000010000000000000020000000",
    "000000001000000000000001000000",
    "000000000100000000000000100000",
    "000000000012000000000000010000",
    "000000000002000000000000001000",
    "000000000000100000000000000100",
    "000000000000010000000000000010",
    "000000000000001000000000000001",
    "111000000000000000000000000000",
  ],
  [
    "0",
    "001112000000000000000000000000",
    "000001112200000000000000000000",
    "000000001112222000000000000000",
    "000000000001112222220000000000",
    "000000000000001112222220000000",
    "222200000000000001112222000000",
    "002222222000000000001112220000",
    "000002222220000000000301112220",
    "000000000000000000000000001110",
    "110000000000000000000000000001",
  ],
  [
    "0",
    "000000000000000000000000001110",
    "000000000000000000002221110000",
    "000000000000000222221110000000",
    "000000000002222221110000000000",
    "000000002222221110300000000000",
    "000000022221110000000000022222",
    "000002221110000000000222222200",
    "002221110000000022222222000000",
    "001110000000000000000000000000",
    "110000000000000000000000000001",
  ],
  [
    "0",
    "001111220000000000000000000000",
    "000000111122000000220000222200",
    "000000000011112200000022000000",
    "000000000003001111222000000000",
    "00222000000000000111122000000",
    "000022222000000000000011112200",
    "000000002222000000000000001111",
    "110000000000000000000000000000",
  ],
  [
    "0",
    "000000000000000000000002211110",
    "000022200002200000022111100000",
    "002220000000000221111000000000",
    "000000000002211110000000000000",
    "000000022111100000000022220000",
    "000221111000000000022222222000",
    "211110030000000022222000220002",
    "100000000000000000000000000001",
  ],
  [
    "0",
    "001111111111111111111111111111",
    "000000000000000000000300000000",
    "000111111111111111110001111110",
    "222122222222222222100012222212",
    "222222222222222221000122222222",
    "222222222222222210001222222222",
    "222222222222222100012222222222",
    "222222222222221000122222222222",
    "222222222222210001222222222222",
    "222222222222100012222222222222",
    "222221111221000122211111122222",
    "111111001110001111122222211111",
  ],
  [
    "0",
    "001111111111111111111111111110",
    "000122222222222222022222221221",
    "100012222222222222022222221222",
    "210001222222222222022222221222",
    "221000122222222222022222221222",
    "222100012222222222022222221222",
    "222210031222222222022222221222",
    "222221000122222222022222221222",
    "222222100012222222022222221222",
    "222222210001222222022222221222",
    "211111221000122222022111111222",
    "112221111100011111111122221111",
  ],
  [
    "0",
    "001111111111111111111111111110",
    "000000000000000000000000000011",
    "100000000000000022222222220001",
    "111111111111111112222222222000",
    "100000000000000000000000000001",
    "000222222222200000000000000011",
    "002222222222111111111111111110",
    "000000000000003000000000000011",
    "100000000000000022222222220001",
    "111111111111111112222222222000",
    "100000000000000000000000000001",
    "000222222222200000000000000011",
    "002222222222111111111111111110",
    "000000000000000000000000000011",
    "000000000002222222222222220001",
    "111111111111222222222222222000",
  ],
  [
    "0",
    "001000000011100000111110000000",
    "000122222100012221000001222222",
    "100012221000001110000000122222",
    "210001110000000300000000012222",
    "221000000011100000111110001222",
    "222100000122211111222221000122",
    "222211111222222222222222100012",
    "000000000000000000000001000001",
    "110000000000000000000000000000",
  ],
  [
    "0",
    "001000000011100000111110000000",
    "000100000100010001000001000001",
    "100010001000001110000000100000",
    "010001110000000000000000010000",
    "001000300011100000111110001000",
    "000100000100011111000001000100",
    "000011111000000000000000100010",
    "000000000000000000000001000001",
    "110000000000000000000000000000",
  ],
  [
    "0",
    "000000000000000000000000000110",
    "000000000000000000000000211000",
    "000211111000001111000000000000",
    "100000000000110000112000000011",
    "011200000000000000000000000000",
    "000000000011000000001110000000",
    "000001111100002222000001111000",
    "000000000000000000000000000000",
    "000000000200000000002200000000",
    "000000000011120000000000000000",
    "000000000000002111120000000000",
    "021111120000000000002111111110",
    "000030000000000000000000000000",
    "000000000002111111200000211200",
    "000000000000000000000000000000",
    "000000000000211122112211200000",
    "000000111112000000000000000100",
    "002112000000000000000000000010",
    "110000000000000000000000000001",
  ],
  [
    "0",
    "001000000000000000011110000010",
    "012222222222222222100001222100",
    "122222222211222221000000111000",
    "222222222100122210000000000001",
    "222222221000011100011110000012",
    "222222210000003000122221000122",
    "222222100011000001222222111222",
    "222221000122100012222222212222",
    "222210001222111222222222221222",
    "222100012222222222222222222122",
    "221000100000000000000000000012",
    "210000010000000000000000000001",
    "100000000000000000000000000000",
  ],
  [
    "0",
    "001000000000000000011110000010",
    "010000000000000000103001000100",
    "100000000011000001000000111000",
    "000000000100100010000000000001",
    "000000001000011100011110000010",
    "000000010000000000100001000100",
    "000000100011000001000000111000",
    "000001000100100010000000020000",
    "000010001000011100000000001000",
    "000100010000000000000000000100",
    "001000100000000000000000000010",
    "010000010000000000000000000001",
    "100000000000000000000000000000",
  ],
  [
    "0",
    "001111111111111111111111111110",
    "000000000000000000000000000000",
    "000000000000000000000000000000",
    "112111121111111001112111112111",
    "000000000000000000000000000000",
    "000000000000000000000000000000",
    "011122111121111112111112211110",
    "000000000000000000000000000000",
    "000000000000000000000000000000",
    "111111122111001111112211111111",
    "000000000000000003000000000000",
    "000000000000000000000000000000",
    "111122111111111122111112111100",
  ],
  [
    "0",
    "001111111111111111111111111110",
    "000000000000000000000000000000",
    "000000000000000000000000000000",
    "222201111222222222221112222222",
    "000000300000000000000000000000",
    "000000000000000000000000000000",
    "222222220111122221110201112222",
    "000000000000000000000000000000",
    "000000000000000000000000000000",
    "222222222222011110222222201112",
    "000000000000000000000000000000",
    "000000000000000000000000000000",
    "110222222222222222222222222201",
  ],
  [
    "0",
    "001001001001001001001001001001",
    "000000000000000000000000000000",
    "000000000000000000000000000000",
    "100100100100100100100100100100",
    "000000000000000300000000000000",
    "000000000000000000000000000000",
    "010010010010010010010010010010",
    "000000000000000000000000000000",
    "000000000000000000000000000000",
    "100100000000000000000000000100",
  ],
  [
    "0",
    "001111111111111111111111111110",
    "000000000000000000020000000000",
    "000000000000000000010000000000",
    "111111111111111120010021111111",
    "000000300000000000010000000000",
    "000000000000000000010000000000",
    "110002111111111111111111111111",
  ],
  [
    "0",
    "001111111111111111111111111110",
    "000000002000000000000000000000",
    "000000001000000000000000000000",
    "111112001002111111111111111111",
    "000000001000000000000000000000",
    "000000001000000000000000000000",
    "111111111111111111111111112002",
    "000000000000000000000020300000",
    "000000000000000000000010000000",
    "111111111111111111120011111111",
    "000000000000002000000000000000",
    "000000000000001000000000000000",
    "110021111111111111111111111111",
  ],
  [
    "0",
    "001100000000000000000000000110",
    "000011000000000000000000011000",
    "000000110000000000000001100000",
    "111000001100000000000110000011",
    "000110000011000000011000001100",
    "000001100000110001100000110000",
    "000000011000001110000011000000",
    "000000000110000300001100000000",
    "000000000001100000110000000000",
    "000000000110000000001100000000",
    "000000011000001110000011000000",
    "000001100000110001100000110000",
    "000110000011000000011000001100",
    "011000001100000000000110000011",
    "100000110000000000000001100000",
  ],
  [
    "0",
    "001100000000000000000000000110",
    "000011222222222222222222211000",
    "000000112222222222222221100000",
    "111000001122222222222110000011",
    "222110000011222222211000001122",
    "222221100000112221100000112222",
    "222222211000001110000011222222",
    "222222222110000300001122222222",
    "222222222221100000112222222222",
    "222222222110000000001122222222",
    "222222211000001110000011222222",
    "222221100000111111100000112222",
    "222110000011222222211000001122",
    "211000001122222222222110000011",
    "100000112222222222222221100000",
  ],
  [
    "0",
    "001111111111111111111111111110",
    "000222222222222222222222222200",
    "000000000000000000000000000000",
    "111111111111111000111111111111",
    "222222222222220000022222222222",
    "000000000000000000000000000000",
    "110001111111111111111111110001",
  ],
  [
    "0",
    "001111111111111111111111111110",
    "000222222222222222222222222200",
    "000000000000000000000000000000",
    "222222222222220000022222222222",
    "111111111111111000111111111111",
    "222222222222220000022222222222",
    "000000000000000000000000000000",
    "000000222222222222222222200000",
    "110001111111111111111111110001",
  ],
];
function createPlatform(p, ind) {
  return p
    .split("")
    .map(
      (p, i) =>
        new Platform(
          i * 12,
          (p === "1"
            ? 1
            : p === "2"
            ? Math.round(Math.random())
            : p === "3"
            ? 1
            : 0) *
            ind *
            PLATFORM_HEIGHT,
          p === "3" ? "energy" : "block"
        )
    );
}
const platforms = map.map((v, ind) => createPlatform(v, ind));
const bricks = map.map((v, ind) => {
  return v
    .split("")
    .map(
      (b, i) =>
        new Brick(
          i * 12,
          (b === "0" ? (Math.random() > 0.5 ? 1 : 0) : 0) *
            ind *
            PLATFORM_HEIGHT
        )
    );
});
const player = new Player();

function calculateCollisions(player) {
  const result = platforms[
    ((canvas.height + globalHeight - player.height) / PLATFORM_HEIGHT).toFixed()
  ]?.filter((p) => {
    return (
      p.isFront &&
      p.height !== 0 &&
      p.initPoint - 4 < canvas.width / 2 &&
      p.initPoint + PLATFORM_WIDTH + 4 > canvas.width / 2 &&
      p.type !== "energy"
    );
  });
  floorCollision = result?.[0];
  if (floorCollision) {
    jumped = !1;
  }
  heightRecord = Math.max(heightRecord, (floorCollision?.height || 0) - 50);

  if (
    message.warningDisplayed &&
    platforms[
      (
        (canvas.height + globalHeight - player.height) / PLATFORM_HEIGHT +
        1
      ).toFixed()
    ]?.some(
      (pl) =>
        pl.type === "energy" &&
        pl.isFood &&
        pl.height > 0 &&
        pl.isFront &&
        pl.initPoint + 16 > canvas.width / 2 &&
        pl.initPoint + 8 < canvas.width / 2
    )
  ) {
    platforms[
      (
        (canvas.height + globalHeight - player.height) / PLATFORM_HEIGHT +
        1
      ).toFixed()
    ].find(
      (pl) =>
        pl.type === "energy" &&
        pl.isFood &&
        pl.height > 0 &&
        pl.isFront &&
        pl.initPoint + 16 > canvas.width / 2 &&
        pl.initPoint + 8 < canvas.width / 2
    ).height = 0;
    zzfx(
      ...[
        0.7,
        ,
        632,
        0.07,
        0.26,
        0.3,
        ,
        3.8,
        ,
        74,
        471,
        0.08,
        0.04,
        ,
        ,
        ,
        ,
        0.97,
        0.18,
        ,
        -713,
      ]
    );
    energy += 30;
    if (energy > 100) {
      energy = 100;
    }
  }

  if (
    platforms[
      (
        (canvas.height + globalHeight - player.height + 1) / PLATFORM_HEIGHT +
        1
      ).toFixed()
    ]?.filter((p) => {
      return (
        p.isFront &&
        p.type !== "energy" &&
        p.height !== 0 &&
        p.initPoint - 4 < canvas.width / 2 &&
        p.initPoint + PLATFORM_WIDTH + 4 > canvas.width / 2
      );
    }).length > 0
  ) {
    player.velocity = 3;
    cannotJump = !0;
  } else {
    cannotJump = !1;
  }
  if (
    platforms[
      (
        (canvas.height + globalHeight - player.height) / PLATFORM_HEIGHT +
        1
      ).toFixed()
    ]?.some(
      (p) =>
        p.isFront &&
        p.height !== 0 &&
        p.initPoint - 5 < canvas.width / 2 &&
        p.initPoint + PLATFORM_WIDTH > canvas.width / 2 &&
        p.type !== "energy"
    )
  ) {
    globalAngle += 0.1;
    globalVelocity = 0;
  } else if (
    platforms[
      (
        (canvas.height + globalHeight - player.height) / PLATFORM_HEIGHT +
        1
      ).toFixed()
    ]?.some(
      (p) =>
        p.isFront &&
        p.height !== 0 &&
        p.initPoint + PLATFORM_WIDTH < canvas.width / 2 &&
        p.initPoint > canvas.width / 2 - PLATFORM_WIDTH - 5 &&
        p.type !== "energy"
    )
  ) {
    globalAngle -= 0.1;
    globalVelocity = 0;
  }
}
const moveState = { left: !1, right: !1 };
function rotate(key) {
  if (key === "ArrowLeft" || key === "A" || key === "a") {
    moveState.right = !0;
  } else if (key === "ArrowRight" || key === "D" || key === "d") {
    moveState.left = !0;
  } else if (key === "ArrowUp" || key === "W" || key === "w" || key === " ") {
    !gameOver && !jumped && !player.inAir && player.jump();
    jumped = !0;
  }
}
function stop(key) {
  if (key === "ArrowUp" || key === "W" || key === "w" || key === " ") {
    jumped = !0;
  }
  if (key === "ArrowLeft" || key === "A" || key === "a") {
    moveState.right = !1;
  } else if (key === "ArrowRight" || key === "D" || key === "d") {
    moveState.left = !1;
  }
}

const handleTouch = (e) => {
  e.preventDefault();
  if (e.isPrimary) {
    if (e.clientX < document.body.offsetWidth / 2) {
      rotate("A");
    } else {
      rotate("D");
    }
  } else {
    !jumped && !player.inAir && player.jump();
    jumped = !0;
  }
};
const handleTouchEnd = (e) => {
  if (e.isPrimary) {
    stop("D");
    stop("A");
    stop("W");
  }
};

document.addEventListener("keydown", (e) => rotate(e.key));
document.addEventListener("keyup", (e) => stop(e.key));
document.addEventListener("pointerdown", handleTouch);
document.addEventListener("pointerup", handleTouchEnd);
document.addEventListener("touchmove", (e) => e.preventDefault());

function checkHeight() {
  if (globalHeight > 1000 && !message.warningDisplayed) {
    message.text = "HUNGRY!";
    message.transparency = 255;
    message.warningDisplayed = !0;
  }
  if (gameOver) {
    document.body.style.backgroundColor = "#000000";
    message.text = "GAME OVER";
    message.transparency = 255;
  }
  if (player.height < canvas.height / 2) {
    globalHeight += Math.abs(canvas.height / 2 - player.height) / 30;
  } else if (player.height > (canvas.height / 3) * 2) {
    globalHeight -= Math.abs(canvas.height / 2 - player.height) / 30;
  }
  if (map.length * PLATFORM_HEIGHT < globalHeight + canvas.height) {
    addMapRows();
  }
}
function addMapRows() {
  let mapHeight = map.length;
  const randomMapSegmentIndex = Math.floor(Math.random() * mapSegments.length);
  map.push(...mapSegments[randomMapSegmentIndex]);
  const newPlatforms = mapSegments[randomMapSegmentIndex].map((v, ind, a) => {
    return createPlatform(v, ind + mapHeight);
  });
  platforms.push(...newPlatforms);
  const newBricks = mapSegments[randomMapSegmentIndex].map((v, ind, a) => {
    return v
      .split("")
      .map(
        (b, i) =>
          new Brick(
            i * 12,
            (b === "0" ? (Math.random() > 0.5 ? 1 : 0) : 0) *
              (ind + mapHeight) *
              PLATFORM_HEIGHT,
            ind % 2 === 0
          )
      );
  });
  bricks.push(...newBricks);
}
function formatHeigh(h) {
  const KM = Math.floor(h / 100000);
  const M = Math.floor((h % 100000) / 100);
  const CM = h % 100;
  return `${KM ? KM + "km" : ""} ${M ? M + "m" : ""} ${CM + "cm"}`;
}
function draw() {
  if (message.warningDisplayed) energy -= 0.016 + globalHeight / 1000000;
  if (energy < 0) {
    energy = 0;
    gameOver = !0;
    canvas.style.filter = "brightness(0)";
    canvas.classList.add("gameover");
    localStorage.setItem(
      "m_endless_tower",
      Math.max(localStorage.getItem("m_endless_tower"), heightRecord)
    );
  }
  if (gameOver) {
    const button = document.getElementById("record");
    button.innerText = formatHeigh(localStorage.getItem("m_endless_tower"));
  }

  calculateCollisions(player);
  globalAngle += globalVelocity;
  globalAngle %= 360;
  if (!gameOver) {
    if (moveState.left) {
      globalVelocity -= 0.3;
    } else if (moveState.right) {
      globalVelocity += 0.3;
    }
  }

  if (globalVelocity > 1) globalVelocity = 1;
  if (globalVelocity < -1) globalVelocity = -1;
  globalVelocity *= 0.9;
  if (Math.abs(globalVelocity) < 0.1) globalVelocity = 0;
  checkHeight();

  canvas.style.backgroundPosition = ` ${-globalAngle * 10}px ${globalHeight}px`;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  platforms.forEach((v) =>
    v.filter((p) => !p.isFront).forEach((platform) => platform.draw())
  );
  ctx.fillStyle = "#000";
  ctx.fillRect(canvas.width / 2 - 90, 0, 180, canvas.height);
  bricks.forEach((v) => v.forEach((brick) => brick.draw()));
  player.draw();
  platforms.toReversed().forEach((v) =>
    v
      .filter((p) => p.isFront)
      .toSorted(
        (a, b) =>
          Math.abs(canvas.width / 2 - b.initPoint) -
          Math.abs(canvas.width / 2 - a.initPoint)
      )
      .forEach((platform) => platform.draw())
  );
  const markersBaseHeight = canvas.height - 50 + globalHeight;
  markers.forEach((m) => {
    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, markersBaseHeight - m.height, canvas.width / 2 - 120, 1);
    ctx.textAlign = "left";
    ctx.font = "20px Courier New";
    ctx.fillText(m.text, 5, markersBaseHeight - m.height - 5);
  });
  ctx.fillStyle = "#10121c";
  ctx.fillRect(
    0,
    canvas.height + globalHeight - platforms[5][0].height + PLATFORM_HEIGHT,
    canvas.width,
    canvas.height - platforms[5][0].height
  );
  ctx.textAlign = "left";
  ctx.font = "20px Courier New";
  ctx.fillStyle = "#000";
  ctx.fillText(formatHeigh(heightRecord), 1, 21);
  ctx.fillStyle = "#FFF";
  ctx.fillText(formatHeigh(heightRecord), 0, 20);

  ctx.strokeStyle = "#FFF";
  ctx.strokeRect(canvas.width - 37, 8, 29, 14);
  ctx.fillStyle = `hsl(${Math.round(energy)} 100% 50%)`;
  ctx.fillRect(canvas.width - 35, 10, Math.max(0, energy / 4), 10);

  if (message.text) {
    ctx.textAlign = "center";
    ctx.font = `bold calc(3vw + ${
      (255 - message.transparency) / 10
    }px) Courier New`;
    ctx.fillStyle = "#FFFFFF" + message.transparency.toString(16);
    ctx.fillText(message.text, canvas.width / 2, canvas.height / 2);
    message.transparency -= 1;
    if (message.transparency < 17) {
      message.text = "";
    }
  }
  requestAnimationFrame(draw);
}
draw();
