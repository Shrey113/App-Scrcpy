

### Windows CMD Version Guide

This guide explains how to use the **Command Line (CMD) version** of App-Scrcpy.

---

### 🚀 Basic Usage

```
android_av_streamer.exe [IP_ADDRESS] [OPTIONS]
```

You must provide the **Android device IP address**.


###  How To Find The IP Address?

1. Open the Android app
2. The app shows your local IP address (example: `192.168.29.168`)
3. Use that IP in the CMD command

---

### Minimum Required Command

```
android_av_streamer.exe 192.168.1.100
```

or

```
android_av_streamer.exe --ip=192.168.1.100
```

If IP is missing, the app will show an error and exit.

---

### Available Arguments

1️⃣ `--ip=VALUE`

Sets the Android device IP address.

Example:

```
--ip=192.168.1.150
```

You can also pass IP as the first argument without `--ip`.

---

2️⃣ `--audio=true/false`

Enable or disable **audio streaming**.

Example:

```
--audio=true
--audio=false
```

---

3️⃣ `--screen=true/false`

Enable or disable **screen mirroring**.

Example:

```
--screen=true
--screen=false
```

---

4️⃣ `--control=true/false`

Enable or disable **remote touch & keyboard control**.

Example:

```
--control=true
```

⚠ Control requires either audio or screen to be enabled.

This is invalid:

```
--control=true --audio=false --screen=false
```

---

5️⃣ `--auto-start`

Automatically enables:

* Audio
* Screen
* Control

Skips settings UI and connects immediately.

Example:

```
android_av_streamer.exe 192.168.1.100 --auto-start
```

Equivalent to:

```
--audio=true --screen=true --control=true
```

---

6️⃣ `-help` or `--help`

Shows help information.

```
android_av_streamer.exe --help
```

---

## Configuration Rules

### Rule 1 — IP is Mandatory

If IP is missing:

* Program shows error
* Waits for key press
* Exits safely

### Rule 2 — Control Dependency

Control cannot run alone.

Valid:

```
--screen=true --control=true
```

Invalid:

```
--control=true
```

### Rule 3 — Auto Start Overrides Everything

If `--auto-start` is used:

* Audio = ON
* Screen = ON
* Control = ON

Even if other flags were false.

### Rule 4 — Explicit Flags Skip Settings UI

If you manually set:

```
--audio=true
--screen=true
```

The settings page will be skipped and connection starts immediately.

---
