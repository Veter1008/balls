// Generated by CoffeeScript 2.5.1
var Ball, active, balls, col, counter, d, draw, keyPressed, level, mousePressed, radie, reset, setup, start, stopp;

active = 0;

start = 0;

stopp = 0;

level = 0;

radie = 50;

counter = 0;

col = [255, 0, 0];

d = [-1, 1, 0];

Ball = class Ball {
  constructor(x1, y1, dx1, dy1, r1, g1, b1) {
    this.x = x1;
    this.y = y1;
    this.dx = dx1;
    this.dy = dy1;
    this.r = r1;
    this.g = g1;
    this.b = b1;
    this.active = true;
  }

  rita() {
    if (!this.active) {
      return;
    }
    if (this.x > width - radie) {
      this.dx = -this.dx;
    }
    if (this.x < radie) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    sw(2);
    if (this.y > height - radie) {
      this.dy = -this.dy;
    } else {
      this.dy += 0.1;
    }
    this.y += this.dy;
    fc(this.r, this.g, this.b, 0.5);
    return circle(this.x, this.y, radie);
  }

  inside(mx, my) {
    return dist(this.x, this.y, mx, my) < radie;
  }

};

balls = [];

setup = function() {
  createCanvas(windowWidth, windowHeight);
  radie = windowWidth / 20;
  return reset();
};

reset = function() {
  var i, j, len, ref;
  level++;
  radie *= 0.95;
  start = new Date();
  ref = range(level);
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    keyPressed();
  }
  return textAlign(CENTER, CENTER);
};

draw = function() {
  var ball, i, j, k, l, len, len1, len2, ref, ref1, results, results1;
  //background col[0],col[1],col[2]
  bg(0);
  for (j = 0, len = balls.length; j < len; j++) {
    ball = balls[j];
    ball.rita();
    textSize(100);
  }
  if (active === 0) {
    sc(0);
    sw(3);
    fc(1);
    text((stopp - start) / 1000, width / 2, height / 2);
  }
  if (frameCount % 2 === 0) {
    counter++;
    if (counter % 257 === 256) {
      ref = range(3);
      results = [];
      for (k = 0, len1 = ref.length; k < len1; k++) {
        i = ref[k];
        results.push(d[i] = col[i] > 128 ? _.random(-1, 0) : _.random(0, 1));
      }
      return results;
    } else {
      ref1 = range(3);
      results1 = [];
      for (l = 0, len2 = ref1.length; l < len2; l++) {
        i = ref1[l];
        results1.push(col[i] += d[i]);
      }
      return results1;
    }
  }
};

mousePressed = function() {
  var ball, j, len, results;
  if (active === 0) {
    return reset();
  } else {
    results = [];
    for (j = 0, len = balls.length; j < len; j++) {
      ball = balls[j];
      if (ball.active && ball.inside(mouseX, mouseY)) {
        ball.active = false;
        active--;
        if (active === 0) {
          stopp = new Date();
          fc(0);
          results.push(console.log(stopp - start));
        } else {
          results.push(void 0);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  }
};

keyPressed = function() {
  var b, dx, dy, g, r, x, y;
  active++;
  x = random(50, width);
  y = random(50, 100);
  dx = random(-2, 2);
  dy = random(-0.3, 0.3);
  r = random(1);
  g = random(1);
  b = random(1);
  return balls.push(new Ball(x, y, dx, dy, r, g, b));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNDLElBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLEVBQUEsWUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQTs7QUFBQSxNQUFBLEdBQVM7O0FBQ1IsS0FBQSxHQUFROztBQUNSLEtBQUEsR0FBTTs7QUFDTixLQUFBLEdBQU07O0FBQ04sS0FBQSxHQUFNOztBQUNOLE9BQUEsR0FBUTs7QUFDUixHQUFBLEdBQU0sQ0FBQyxHQUFELEVBQUssQ0FBTCxFQUFPLENBQVA7O0FBQ04sQ0FBQSxHQUFJLENBQUMsQ0FBQyxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU47O0FBRUUsT0FBTixNQUFBLEtBQUE7RUFDQSxXQUFjLEdBQUEsSUFBQSxLQUFBLEtBQUEsSUFBQSxJQUFBLElBQUEsQ0FBQTtJQUFDLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFJLElBQUMsQ0FBQTtJQUFJLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUN6QyxJQUFDLENBQUEsTUFBRCxHQUFVO0VBREc7O0VBRWQsSUFBTyxDQUFBLENBQUE7SUFDTixJQUFHLENBQUksSUFBQyxDQUFBLE1BQVI7QUFBb0IsYUFBcEI7O0lBQ0EsSUFBRyxJQUFDLENBQUEsQ0FBRCxHQUFLLEtBQUEsR0FBTSxLQUFkO01BQXlCLElBQUMsQ0FBQSxFQUFELEdBQU0sQ0FBQyxJQUFDLENBQUEsR0FBakM7O0lBQ0EsSUFBRyxJQUFDLENBQUEsQ0FBRCxHQUFLLEtBQVI7TUFBbUIsSUFBQyxDQUFBLEVBQUQsR0FBTSxDQUFDLElBQUMsQ0FBQSxHQUEzQjs7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OztNQUNDLElBQUcsSUFBSSxDQUFDLE1BQUwsSUFBZ0IsSUFBSSxDQUFDLE1BQUwsQ0FBWSxNQUFaLEVBQW1CLE1BQW5CLENBQW5CO1FBQ0MsSUFBSSxDQUFDLE1BQUwsR0FBYztRQUNkLE1BQUE7UUFDQSxJQUFHLE1BQUEsS0FBVSxDQUFiO1VBQ0MsS0FBQSxHQUFRLElBQUksSUFBSixDQUFBO1VBQ1IsRUFBQSxDQUFHLENBQUg7dUJBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFBLEdBQU0sS0FBbEIsR0FIRDtTQUFBLE1BQUE7K0JBQUE7U0FIRDtPQUFBLE1BQUE7NkJBQUE7O0lBREQsQ0FBQTttQkFIRDs7QUFEZTs7QUFZZixVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7QUFDZCxNQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBO0VBQUMsTUFBQTtFQUNBLENBQUEsR0FBSSxNQUFBLENBQU8sRUFBUCxFQUFVLEtBQVY7RUFDSixDQUFBLEdBQUksTUFBQSxDQUFPLEVBQVAsRUFBVSxHQUFWO0VBQ0osRUFBQSxHQUFLLE1BQUEsQ0FBTyxDQUFDLENBQVIsRUFBVSxDQUFWO0VBQ0wsRUFBQSxHQUFLLE1BQUEsQ0FBTyxDQUFDLEdBQVIsRUFBWSxHQUFaO0VBRUwsQ0FBQSxHQUFJLE1BQUEsQ0FBTyxDQUFQO0VBQ0osQ0FBQSxHQUFJLE1BQUEsQ0FBTyxDQUFQO0VBQ0osQ0FBQSxHQUFJLE1BQUEsQ0FBTyxDQUFQO1NBQ0osS0FBSyxDQUFDLElBQU4sQ0FBVyxJQUFJLElBQUosQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLEVBQWIsRUFBZ0IsRUFBaEIsRUFBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsRUFBdUIsQ0FBdkIsQ0FBWDtBQVZhIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmFjdGl2ZSA9IDBcclxuc3RhcnQgPSAwXHJcbnN0b3BwPTBcclxubGV2ZWw9MFxyXG5yYWRpZT01MFxyXG5jb3VudGVyPTBcclxuY29sID0gWzI1NSwwLDBdXHJcbmQgPSBbLTEsMSwwXVxyXG5cclxuY2xhc3MgQmFsbFxyXG5cdGNvbnN0cnVjdG9yIDogKEB4LCBAeSwgQGR4LCBAZHksIEByLCBAZywgQGIpIC0+XHJcblx0XHRAYWN0aXZlID0gdHJ1ZVxyXG5cdHJpdGEgOiAtPlxyXG5cdFx0aWYgbm90IEBhY3RpdmUgdGhlbiByZXR1cm4gXHJcblx0XHRpZiBAeCA+IHdpZHRoLXJhZGllIHRoZW4gQGR4ID0gLUBkeFxyXG5cdFx0aWYgQHggPCByYWRpZSB0aGVuIEBkeCA9IC1AZHhcclxuXHRcdEB4ICs9IEBkeFxyXG5cdFx0c3cgMlxyXG5cclxuXHRcdGlmIEB5ID4gaGVpZ2h0LXJhZGllIHRoZW4gQGR5ID0gLUBkeSBlbHNlIEBkeSs9MC4xXHJcblxyXG5cdFx0QHkgKz0gQGR5XHJcblx0XHRmYyBAcixAZyxAYiwwLjVcclxuXHRcdGNpcmNsZSBAeCxAeSxyYWRpZVxyXG5cdGluc2lkZSA6IChteCxteSkgLT4gZGlzdChAeCxAeSxteCxteSkgPCByYWRpZVxyXG5cclxuYmFsbHMgPSBbXVxyXG5cclxuc2V0dXAgPSAtPlxyXG5cdGNyZWF0ZUNhbnZhcyB3aW5kb3dXaWR0aCx3aW5kb3dIZWlnaHRcclxuXHRyYWRpZT13aW5kb3dXaWR0aC8yMFxyXG5cdHJlc2V0KClcclxuXHJcbnJlc2V0ID0gLT5cclxuXHRsZXZlbCsrXHJcblx0cmFkaWUgKj0gMC45NVxyXG5cdHN0YXJ0ID0gbmV3IERhdGUoKVxyXG5cdGZvciBpIGluIHJhbmdlIGxldmVsXHJcblx0XHRrZXlQcmVzc2VkKClcclxuXHR0ZXh0QWxpZ24gQ0VOVEVSLCBDRU5URVJcclxuXHRcclxuZHJhdyA9IC0+XHJcblx0I2JhY2tncm91bmQgY29sWzBdLGNvbFsxXSxjb2xbMl1cclxuXHRiZyAwXHJcblx0Zm9yIGJhbGwgaW4gYmFsbHNcclxuXHRcdGJhbGwucml0YSgpXHJcblx0XHR0ZXh0U2l6ZSAxMDBcclxuXHRpZiBhY3RpdmU9PTBcclxuXHRcdHNjIDBcclxuXHRcdHN3IDNcclxuXHRcdGZjIDFcclxuXHRcdHRleHQgKHN0b3BwLXN0YXJ0KS8xMDAwLHdpZHRoLzIsaGVpZ2h0LzJcclxuXHJcblx0aWYgZnJhbWVDb3VudCUyID09IDBcclxuXHRcdGNvdW50ZXIrK1xyXG5cdFx0aWYgY291bnRlciAlIDI1NyA9PSAyNTZcclxuXHRcdFx0Zm9yIGkgaW4gcmFuZ2UgM1xyXG5cdFx0XHRcdGRbaV0gPSBpZiBjb2xbaV0gPiAxMjggdGhlbiBfLnJhbmRvbSAtMSwwIGVsc2UgXy5yYW5kb20gMCwxXHJcblx0XHRlbHNlIGNvbFtpXSArPSBkW2ldIGZvciBpIGluIHJhbmdlIDNcclxuXHJcbm1vdXNlUHJlc3NlZCA9IC0+XHJcblx0aWYgYWN0aXZlPT0wXHJcblx0XHRyZXNldCgpXHJcblx0ZWxzZSBcclxuXHRcdGZvciBiYWxsIGluIGJhbGxzXHJcblx0XHRcdGlmIGJhbGwuYWN0aXZlIGFuZCBiYWxsLmluc2lkZSBtb3VzZVgsbW91c2VZIFxyXG5cdFx0XHRcdGJhbGwuYWN0aXZlID0gZmFsc2VcclxuXHRcdFx0XHRhY3RpdmUtLVxyXG5cdFx0XHRcdGlmIGFjdGl2ZSA9PSAwXHJcblx0XHRcdFx0XHRzdG9wcCA9IG5ldyBEYXRlKCkgXHJcblx0XHRcdFx0XHRmYyAwXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyBzdG9wcC1zdGFydFxyXG5rZXlQcmVzc2VkID0gLT5cclxuXHRhY3RpdmUrK1xyXG5cdHggPSByYW5kb20gNTAsd2lkdGhcclxuXHR5ID0gcmFuZG9tIDUwLDEwMFxyXG5cdGR4ID0gcmFuZG9tIC0yLDJcclxuXHRkeSA9IHJhbmRvbSAtMC4zLDAuM1xyXG5cclxuXHRyID0gcmFuZG9tIDFcclxuXHRnID0gcmFuZG9tIDFcclxuXHRiID0gcmFuZG9tIDFcclxuXHRiYWxscy5wdXNoIG5ldyBCYWxsIHgseSxkeCxkeSxyLGcsYiJdfQ==
//# sourceURL=c:\github\balls\coffee\sketch.coffee