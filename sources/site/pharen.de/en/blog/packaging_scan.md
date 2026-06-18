# Source: https://pharen.de/en/blog/packaging_scan

Case Study: Automated Packaging Scanning with Rust

## Introduction

If you’ve ever stood next to a conveyor belt in a noisy plant, you know that time feels different there. Each heartbeat determines how many packages go out the door and whether they’re packed in the right box. Before our project, teams were measuring boxes with tape measures, jotting dimensions on paper and often choosing a carton by guesswork.

When the production team approached us, their request was simple and ambitious: make selecting the right box as natural as picking up a scanner. Place the package, and in under half a second the outline should be captured, the dimensions calculated and the label printed.

In this case study, we share how we combined Rust and 3D sensors to create a system that makes that vision a reality.

## Client & Key Facts

| Client | Platform type | Team | Industry | Users | Location | Market | Project duration |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Industrial company | Desktop-/Mobile app | PM, Rust dev, computer vision, UI/UX, QA | Manufacturing | Production staff, logistics teams | Europe | worldwide | 3 months |

## Why it matters

On our first tour of the plant we saw staff with tape measures in one hand and notepads in the other, trying to keep up with a river of packages. Oversized boxes were common, wasting material and driving up shipping costs. Yet modern 3D sensors can scan even irregular packages precisely. They capture volume, height, width and length, optimising storage and transport space【375008585752810†L1101-L1106】. They also detect defects and misalignments that traditional 2D cameras miss【375008585752810†L1108-L1115】.

The key benefits are clear:

- **Speed:** Each scan takes less than half a second – a world apart from manual measuring.
- **Quality:** 3D sensors see dents and tears before they become problems【375008585752810†L1108-L1115】.
- **Savings:** Accurate dimensions reduce packaging material and shipping volume, cutting costs noticeably.
- **Insight:** Every scan is stored and available for analysis.

## User experience

Software in a factory has to be both tough and intuitive. That’s why we focused on controls that work with gloves, clear colours and large type so you can understand the process at a glance.

The system guides users step by step: scan the contour, display the measurements, suggest the right box and print the label. The same software runs on tablets for mobile tasks, such as checking goods at the dock.

## Customer benefits

- **Lightning‑fast scanning:** Outlines are captured in less than half a second.
- **Error‑free measurements:** Automation eliminates incorrect values and makes notepads obsolete.
- **More packages per shift:** Teams can drastically increase throughput.
- **Data for quality control:** Historical scan values help optimise processes and spot trends.
- **Easy scaling:** The cross‑platform architecture means the app runs on a variety of devices.

## Business impact

Our solution has reshaped the packaging process. Oversized shipments are now rare, shipping costs are falling and returns are down. Employees appreciate the relief and use their time more effectively. Data flows directly into the ERP and is available for controlling and analysis.

## Project requirements

The client needed a system that recognises boxes of different sizes and shapes quickly, automatically suggests the right class and prints labels. The app had to work offline, connect easily to the ERP and be usable both at a workstation and on mobile devices.

### [Project phases](https://pharen.de/#project-phases)

#### [Discovery (1 week)](https://pharen.de/#discovery-1week)

We spent several days on site, watching the packaging process and talking to staff. Together we identified bottlenecks and gathered requirements. A 3D scanner proved ideal because it captures irregular shapes reliably【375008585752810†L1101-L1106】.

#### [UI/UX Design (2 weeks)](https://pharen.de/#uiux-design-2weeks)

Next we developed wireframes and interactive prototypes. In feedback sessions we tested these concepts with users. Adjustments like larger buttons and colour coding came directly from those conversations.

#### [Development & Integration (5 weeks)](https://pharen.de/#development-integration-5weeks)

The software was written in Rust. We used **Tauri** and **Crux** for the cross‑platform UI; Tauri produces lightweight, performant apps【477875218039410†L46-L63】 and Crux separates core logic from the UI【932251511387094†L134-L138】【932251511387094†L192-L220】. We also integrated:

- An **OpenCV** binding for image and 3D data processing.
- **Sensor adapters** to read data from the scanner.
- **Classification logic** for box sizes.
- **Label printer interface**.
- **Local storage** for offline operation and later synchronisation.

## Our solution & architecture

At the heart of the application is a Rust service that receives sensor data, processes it and returns results. The UI layer accesses it via an internal API. Events such as “scan started” or “label printed” are passed through an event dispatcher. If there is no network connection, data is stored locally and synchronised later.

## Highlights & Design

- **Sub‑second scans:** Each process completes in under half a second.
- **Quality control built in:** Dents and tears are detected【375008585752810†L1108-L1115】.
- **Automatic size selection:** The system suggests the right box.
- **Label creation:** Integrated printing with barcode.
- **Offline functions:** Save data and synchronise later with the ERP.
- **Dashboard:** Analyse throughput times and errors.

## Outcome

Thanks to our solution, teams work faster and make fewer errors. Packaging material is used more efficiently and shipping costs decrease. Customer reports show fewer damages and faster delivery. The app is now used at several sites, and the investment has paid off quickly.

## Conclusion

Technology is just a tool. Understanding people’s day‑to‑day work is what makes the difference. Our project proves that when you listen to users and tailor the solution to their workflows, modern software can achieve great things.