# ⭐ Draw a Perfect Star

A small browser-based drawing game where your goal is simple: **draw a perfect 5-point star as accurately as possible** and get scored based on how close you are to the ideal shape.

Built with vanilla HTML, Canvas, and JavaScript- no frameworks, just math and vibes.

## How it works

- Click and drag on the canvas to draw a shape
- When you release, your drawing is normalised and compared against an ideal star
- You get an **accuracy score (0–100%)**
- Higher precision = higher score

The scoring system compares your stroke path to a mathematically generated star curve using resampling + normalisation.

## Features

- Realtime drawing on HTML Canvas
- Gesture normalisation for fair scoring
- Procedural "perfect star" generator
- Live accuracy feedback while drawing
- Dynamic colour feedback based on score
- Reset system to try again instantly
- Minimal neon-style UI with animated background

## Scoring system

The game:
1. Resamples your drawn path to a fixed number of points
2. Normalises it (centres + scales to unit size)
3. Generates a reference 5-pointed star shape
4. Computes average point distance error
5. Converts error into a 0–100% accuracy score

## Getting started

Either visit [[https://alflionel.github.io/draw-a-perfect-star/]] or clone the repo and run from dev!
