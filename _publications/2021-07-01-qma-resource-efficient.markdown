---
layout: publication
title: "QMA: A Resource-efficient, Q-learning-based Multiple Access Scheme for the IIoT"
authors: "Florian Meyer, Volker Turau"
published_in: "IEEE 41st International Conference on Distributed Computing Systems (ICDCS)"
year: 2021
month: July
publisher: "IEEE"
doi: "10.1109/icdcs51616.2021.00087"
groups: "Meins"
---

Many MAC protocols for the Industrial Internet of Things, such as IEEE 802.15.4 and its extensions, require contention-based channel access for management traffic, e.g., for slot (de)allocations and broadcasts. In many cases, subtle but hidden patterns characterize this secondary traffic, but present contention-based protocols are unaware of these patterns and therefore cannot exploit them. Especially in dense networks, these protocols often do not provide sufficient throughput and reliability for primary traffic, i.e., they cannot allocate transmission slots in time. In this paper, we propose QMA, a contention-based multiple access scheme based on Q-learning. It dynamically adjusts transmission times to avoid collisions by learning patterns in contention-based traffic. We show that QMA solves the hidden node problem without the overhead for RTS/CTS messages and, for example, increases throughput from 10 packets/s to 50 packets/s in a hidden three-node scenario without sacrificing reliability. Additionally, QMA's scalability is evaluated in a realistic scenario for slot (de)allocation in IEEE 802.15.4 DSME, where it achieves up to twice more slot (de)allocations per second.

