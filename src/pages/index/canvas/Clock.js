import React, { Component } from 'react';
import style from '../style.mcss'
export default class Clock extends Component {

  render() {
    return (
      <canvas className={style['canvas']} width="180" height="180" ref={(elem) => {this.canvas = elem}}></canvas>
    )
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext("2d");
    var this_ =this;
    setInterval(function() {
      this_.ctx.clearRect(0, 0, 180, 180);
      this_.drawClock();
    },1000);
  }

  drawClock() {
    this.drawTable();
    this.drawCenterPoint();
    this.drawMinutesPoint();
    this.drowHoursPoints();
    this.drowHoursNumber();
    this.drawTimes();
  }

  drawTable() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(90,90);
    this.ctx.arc(0,0,90,0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawCenterPoint() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(90,90);
    this.ctx.arc(0,0,5,0, Math.PI * 2);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
    this.ctx.restore();
  }

  drawMinutesPoint() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(90,90);
    for (var i = 0; i<60; i++) {
      this.ctx.moveTo(0, -88);
      this.ctx.lineTo(0, -86);
      this.ctx.rotate(Math.PI /30 )
    }
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.restore();
  }

  drowHoursPoints() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(90,90);
    for (var i = 0; i<60; i++) {
      this.ctx.moveTo(0, -88);
      this.ctx.lineTo(0, -82);
      this.ctx.rotate(Math.PI /6 )
    }
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.restore();
  }

  drowHoursNumber() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(90,90);
    for (var i = 1; i<=12; i++) {
      this.ctx.font = "14px Arial";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.fillText(i, Math.sin(Math.PI * i /6) * 70, -Math.cos(Math.PI * i /6) * 70)
    }
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawTimes() {
    var date = new Date(),
      seconds = date.getSeconds(),
      minutes = date.getMinutes(),
      hours = (date.getHours() % 12) + (minutes / 60);

      this.drawSenconds(seconds);
      this.drawMinutes(minutes);
      this.drawHours(hours);

  }

  drawSenconds(seconds) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(90,90);
    this.ctx.rotate(Math.PI * seconds / 30);
    this.ctx.moveTo(0, 66);
    this.ctx.lineTo(0, -6);
    this.ctx.strokeStyle = "red";
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawMinutes(minutes) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(90,90);
    this.ctx.rotate(Math.PI * minutes / 30);
    this.ctx.moveTo(0, -60);
    this.ctx.lineTo(0, 6);
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawHours(hours) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(90,90);
    this.ctx.rotate(Math.PI * hours / 6);
    this.ctx.moveTo(0, -50);
    this.ctx.lineTo(0, 6);
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.restore();
  }
}