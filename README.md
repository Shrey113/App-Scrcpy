# App-Scrcpy

Wireless Android screen and audio streaming to Windows.

Mirror your Android device screen to a Windows PC with low latency, system audio, and touch control over local Wi-Fi.

No USB cables, ADB setup, root permissions, or extra drivers required.

## Downloads

| Platform / Resource | Link |
| :--- | :--- |
| Android App | [Download APK](https://github.com/Shrey113/App-Scrcpy/releases/latest/download/Android_Stream_Installer.apk) |
| Windows GUI | [Download GUI Repository](https://github.com/Shrey113/Adb-Device-Manager-2) |
| Windows CMD | [Download CMD Version](https://github.com/Shrey113/App-Scrcpy/releases/latest/download/Android_Stream_windows_cmd.zip) |
| Security | [VirusTotal Scan Report](https://www.virustotal.com/gui/file/e5f1d6d30de5951c07b1d6be4014281dae60954d02efbd00542d859f9de5a049?nocache=1) |
| Setup Guide | [View Setup Guide](https://shrey113.github.io/App-Scrcpy/data/setup_guide.html) |
| Command Line Info | [CMD Usage Instructions](https://github.com/Shrey113/App-Scrcpy/blob/main/data/README_file/CMD_USAGE.md) |
| Project Website | [Visit Website](https://shrey113.github.io/App-Scrcpy/) |

*Note: App-Scrcpy is a module of [Adb-Device-Manager-2](https://github.com/Shrey113/Adb-Device-Manager-2) available as a standalone lightweight streaming server from version 1.5.*

## Features

- **H.264 Video Streaming:** Hardware-encoded screen capture via MediaProjection.
- **Internal Audio Capture:** Real-time 48kHz stereo system audio streaming (requires Android 10+).
- **Touch Control:** Remote touch input redirection back to the Android device.
- **Low Latency Audio:** Integrated ring buffer to reduce latency and prevent audio crackling.
- **Dynamic Resolution:** Adapts output resolution dynamically based on device size.

### Mode Matrix

| Mode | Screen Mirroring | Internal Audio | Remote Control | Works on Lock Screen |
| :--- | :---: | :---: | :---: | :---: |
| Screen + Control + Audio | Yes | Yes | Yes | No |
| Audio-Only | No | Yes | No | Yes |

## Architecture

1. **Android Side:** Captures display buffer via MediaProjection and audio via AudioPlaybackCapture. Video is encoded using H.264 (MediaCodec). Packets are sent over WebSockets.
2. **Windows Side:** Connects via WebSocket, decodes video with FFmpeg, plays audio via PortAudio, and renders using SDL2. Input events on the SDL window are sent back to the Android Accessibility Service.

## Windows Hotkeys

| Hotkey | Action |
| :--- | :--- |
| Ctrl + F | Toggle Fullscreen |
| Ctrl + W | Toggle Window Border (Frameless) |
| Ctrl + S | Open Settings |
| Ctrl + B | Go Back |
| Ctrl + R | Open Recent Apps |
| Ctrl + H | Go to Home Screen |

## Requirements

### Android
- Android 10+ (for audio capture)
- Accessibility permission (for remote control)
- Screen capture permission

### Windows
- Windows 10 or 11
- Devices must be on the same local network

## Installation & Usage

1. Install the APK on your Android device.
2. Enable the Accessibility Service when prompted.
3. Note the local IP address displayed on the app screen.
4. Run the Windows GUI client or `android_av_streamer.exe` from the CMD package.
5. Enter the phone IP and click Connect.
6. Accept the screen recording permission prompt on the phone.

---

**Developed by Shrey**
- GitHub: [Shrey113/App-Scrcpy](https://github.com/Shrey113/App-Scrcpy)
- Web: [shrey113.github.io/App-Scrcpy/](https://shrey113.github.io/App-Scrcpy/)
