# Source: https://pharen.de/en/blog/pharen_hub_invoice

Case Study: Incoming Invoice Tool with Pharen Hub

## Introduction

Picture a finance department where paper piles up, invoices arrive via post, email and PDFs, and an accountant constantly jumps between inboxes, folders and the ERP. That was our customer’s daily reality before we came on board.

Together we built an incoming‑invoice tool that eliminates the paper chase. Invoices are automatically imported, read in under two minutes and can be approved with a single click. Behind that simplicity lies a story we share in this case study.

## Customer & Key Facts

| Customer | Platform type | Team | Industry | Users | Location | Market | Project duration |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mid‑sized company | Incoming‑invoice tool | PM, app‑builder, process design, AI/OCR, QA | Finance/accounting | Accounting, purchasing, management | Germany | pan‑Europe | 4 months |

## Why it matters

Talking with the finance team made one thing obvious: manual invoice processing drains both patience and budget. A single hand‑processed invoice costs on average $15–$40【755249572714523†L56-L63】, and more than half of companies spend ten or more hours each week on this routine【755249572714523†L64-L66】. Automation changes the picture entirely: invoices can be processed up to 85 % faster【755249572714523†L74-L81】, the number processed per employee increases by 64 %【755249572714523†L87-L90】 and error rates drop by 90 %【755249572714523†L104-L113】. Costs per invoice fall to just $2–$5【755249572714523†L137-L144】.

Those numbers aren’t just statistics – they translate into a better workday. When people aren’t spending hours entering data, they can focus on analysis and advisory work. Automatic capture and validation reduce typos and duplicates【755249572714523†L104-L113】. Dropping paper and manual steps slashes costs【755249572714523†L137-L144】. And clear workflows prevent delays and late‑payment fees.

## User experience

A finance tool should feel like a helper, not an obstacle. Our system works like a central inbox: incoming invoices are collected and presented in a structured way. Key details—vendor, date, amount—are pre‑filled. Users can review, add notes and approve or return the invoice with a click. Warning messages highlight potential issues. A mobile version lets you check invoices on the go.

## Customer benefits

- **Faster approvals:** Invoices are processed and approved in under two minutes.
- **Error prevention:** Intelligent fields detect duplicates and attempted fraud【755249572714523†L104-L113】.
- **Transparent history:** Every action is fully documented.
- **Less paper:** Digital workflows save space and effort.
- **Easy integration:** Connection to the ERP is seamless and free of media breaks.

## Business impact

The new platform dramatically shortens throughput times: invoices that used to take about 15 minutes are now completed in around two minutes【755249572714523†L92-L95】. The team can handle 64 % more invoices per employee【755249572714523†L87-L90】, and costs per invoice are down by more than 80 %【755249572714523†L137-L144】. Companies also enjoy early‑payment discounts and avoid dunning fees. Greater transparency around outstanding liabilities improves budget planning.

## Project requirements

The client needed a solution that leverages existing Microsoft 365 and ERP environments, is flexible and automatically imports, reads, validates and books invoices. Security and data protection were top priorities.

### [Project phases](https://pharen.de/#project-phases)

#### [Discovery (1 week)](https://pharen.de/#discovery-1week)

In short, intensive workshops we mapped the current process and identified pain points. We evaluated various OCR services and workflow options and defined a clear target picture.

#### [UI/UX design (3 weeks)](https://pharen.de/#uiuxdesign-3weeks)

Together with the users we developed prototypes, tested them and adapted them. A familiar environment that fits into Microsoft 365 was particularly important. Hints and colour codes help avoid mistakes.

#### [Development & integration (5 weeks)](https://pharen.de/#development-integration-5weeks)

**Pharen Hub** served as the low‑code foundation. Using **Lists App Builder** we defined fields and workflows. An OCR service analyses invoices and matches them against purchase orders. Further components include:

- **Email, drive and ERP connectors** for data exchange.
- **Approval rules** with escalations.
- **Notification service** for reminders.
- **Reporting** with metrics such as processing time and savings.

## Our solution & architecture

The application runs in the cloud. Invoices land in a SharePoint list and are read by an OCR service. A workflow service assigns the invoice to the correct cost centre and determines the approval route. The front‑end, built with the Lists App Builder, presents all information and allows approvals with a single click. When approved, the data is automatically transferred to the ERP. Dashboards provide an overview of outstanding invoices and cash flow.

## Highlights & Design

- **Central inbox:** All invoices collected in one place.
- **Intelligent fields:** Automatic detection of invoice data and duplicates【755249572714523†L104-L113】.
- **One‑click approvals:** Workflows also work on smartphones.
- **Compliance & audit:** Every action is logged.
- **Key figures at a glance:** Reports show savings and throughput times.

## Outcome

Four months after project start the tool went live. The processing time per invoice fell from about 15 minutes to roughly 2 minutes【755249572714523†L92-L95】, and the team could handle around 64 % more invoices per employee【755249572714523†L87-L90】. Costs per invoice were reduced by more than 80 %【755249572714523†L137-L144】. Employees felt relieved, and management finally had a transparent view of outstanding liabilities.

## Conclusion

We listened to people and understood their workflows – that’s how we built a solution that makes everyday work simpler. The combination of Pharen Hub, Lists App Builder and intelligent OCR shows how powerful digitalisation can be for both people and businesses.