---
layout: post
title: "My first serious CTF: method before tools"
date: 2026-08-31 18:00:00 +0000
lang: en
category: CTF
description: "A simple way to start a challenge, keep useful notes, and learn from each attempt."
image: /assets/images/articles/ctf-notes.svg
image_alt: "Illustration of challenge notes and a terminal"
permalink: /en/blog/first-ctf/
alt_url: /blog/first-ctf/
---

A capture-the-flag challenge can quickly become a string of commands launched at random. During my first serious CTF, the most useful change was to slow down and follow a repeatable process.

## 1. Read the prompt and define the problem

I start by restating the goal in my own words. Then I list what is provided: a file, URL, IP address, credentials, constraints, and the expected flag format. This keeps me focused on the problem that was actually given.

## 2. Enumerate and keep observations

I collect available information before choosing a direction. For a web service, that can include pages, parameters, headers, and observed behavior. For a file, I note its type, metadata, and interesting strings. I also record the commands I ran and their results.

## 3. Form a hypothesis and test it

A useful hypothesis is specific and testable. I change one variable at a time, preserve the initial state, and compare results. When a lead fails, my notes should explain why I ruled it out.

## 4. Write while solving

I record the reasoning as I go: starting point, observations, decision, result, and next step. A screenshot can show a result, but it does not replace an explanation of what that result means.

## What I learned

Patience, enumeration, and lab notes make each attempt more effective. A finished write-up should include the challenge name, platform, reproducible steps, and shareable screenshots. I never publish private data or a flag when the CTF rules prohibit it.
