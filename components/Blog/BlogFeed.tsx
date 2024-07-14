'use client'

import React, { useState } from "react";
import BlogPost from "./BlogPost";

const BlogFeed: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");

    const blogposts = [
        {
            title: "Wedstrijd Kalender 2024",
            content: "Het nieuwe seizoen voor kruisboogschutters staat voor de deur! In onze kalender voor 2024 vind je alle belangrijke wedstrijden, van lokale competities tot nationale kampioenschappen. Zorg dat je deze data in je agenda zet, want elke wedstrijd biedt een kans om je vaardigheden te testen en nieuwe records te vestigen. Dit jaar verwelkomen we ook enkele nieuwe locaties, die de perfecte ambiance bieden voor spannende wedstrijden. Of je nu een ervaren schutter bent of net begint, er is voor ieder wat wils. Mis de kans niet om deel uit te maken van deze geweldige evenementen en ontmoet andere liefhebbers van de sport! Houd onze website in de gaten voor updates over inschrijvingen en extra informatie over elke wedstrijd. We kijken ernaar uit om je te zien op de schietbanen! ",
            date: "2024-02-15"
        },
        {
            title: "Top Tips voor Beginnende Kruisboogschutters",
            content: "Beginnen met kruisboogschieten kan uitdagend zijn, maar met de juiste tips en technieken kun je snel vooruitgang boeken. In deze blogpost delen we enkele waardevolle adviezen voor beginners, zoals het kiezen van de juiste kruisboog, basis schiettechnieken en veiligheidsmaatregelen. Door deze tips te volgen, zul je niet alleen je vaardigheden verbeteren, maar ook meer plezier beleven aan deze fascinerende sport.",
            date: "2024-01-11"
        },
        {
            title: "De Geschiedenis van Kruisboogschieten",
            content: "Kruisboogschieten heeft een rijke en fascinerende geschiedenis die teruggaat tot de oudheid. In deze blogpost duiken we in de oorsprong en evolutie van de kruisboog, van de vroege militaire toepassingen tot de moderne sport die we vandaag de dag kennen. Ontdek hoe deze krachtige wapens door de eeuwen heen zijn veranderd en welke rol ze hebben gespeeld in verschillende culturen en oorlogen.",
            date: "2023-01-15"
        },
        {
            title: "Hoe Onderhoud je een Kruisboog?",
            content: "Het onderhouden van je kruisboog is essentieel voor optimale prestaties en veiligheid. In deze blogpost bespreken we de belangrijkste stappen voor het schoonmaken en onderhouden van je kruisboog, inclusief tips voor het opslaan en vervoeren ervan. Door regelmatig onderhoud uit te voeren, kun je de levensduur van je kruisboog verlengen en ervoor zorgen dat hij altijd klaar is voor gebruik.",
            date: "2024-01-15"
        },
        {
            title: "De Beste Oefeningen voor Kruisboogschutters",
            content: "Om een betere kruisboogschutter te worden, is het belangrijk om je fysieke conditie en techniek te verbeteren. In deze blogpost delen we enkele effectieve oefeningen en trainingsroutines die je kunnen helpen je kracht, precisie en uithoudingsvermogen te vergroten. Of je nu thuis traint of op de schietbaan, deze oefeningen zullen je helpen om je doelen te bereiken en je prestaties te verbeteren.",
            date: "2024-01-15"
        },
        {
            title: "Veiligheidstips voor Kruisboogschutters",
            content: "Veiligheid staat voorop bij kruisboogschieten. In deze blogpost geven we een overzicht van de belangrijkste veiligheidstips die elke kruisboogschutter moet kennen. Van het correct hanteren van je kruisboog tot het volgen van de juiste procedures op de schietbaan, deze tips helpen je om veilig en verantwoordelijk te schieten.",
            date: "2024-01-15"
        },
        {
            title: "Het Kiezen van de Juiste Kruisboog",
            content: "Er zijn veel verschillende soorten kruisbogen op de markt, en het kiezen van de juiste kan overweldigend zijn. In deze blogpost bespreken we de verschillende soorten kruisbogen, hun voor- en nadelen, en waar je op moet letten bij het maken van je keuze. Of je nu op zoek bent naar een kruisboog voor sport, jacht of recreatie, deze gids helpt je de perfecte kruisboog te vinden.",
            date: "2024-01-15"
        },
        {
            title: "Hoe Verbeter je je Nauwkeurigheid?",
            content: "Nauwkeurigheid is cruciaal bij kruisboogschieten. In deze blogpost delen we enkele geavanceerde technieken en tips om je nauwkeurigheid te verbeteren. Van het juiste gebruik van vizieren tot ademhalingstechnieken en houding, deze tips helpen je om je doel beter te raken en je prestaties te verbeteren.",
            date: "2024-01-15"
        },
        {
            title: "De Psychologie van Kruisboogschieten",
            content: "Kruisboogschieten vereist niet alleen fysieke vaardigheid, maar ook mentale focus en discipline. In deze blogpost verkennen we de psychologische aspecten van kruisboogschieten, zoals concentratie, zelfvertrouwen en het omgaan met druk. Ontdek hoe je je mentale vaardigheden kunt trainen om een betere schutter te worden.",
            date: "2024-01-15"
        },
        {
            title: "De Beste Kruisboog Accessoires",
            content: "Er zijn veel accessoires beschikbaar die je kruisboogervaring kunnen verbeteren. In deze blogpost bespreken we de beste kruisboogaccessoires, van vizieren en stabilisatoren tot cases en onderhoudskits. Ontdek welke accessoires je prestaties kunnen verbeteren en je schietervaring aangenamer kunnen maken.",
            date: "2024-01-15"
        },
        {
            title: "Kruisboog Jacht: Wat je Moet Weten",
            content: "Kruisboog jacht is een populaire vorm van jagen die specifieke vaardigheden en kennis vereist. In deze blogpost delen we essentiële tips en adviezen voor kruisboogjagers, inclusief informatie over regelgeving, ethiek, en de beste praktijken voor een succesvolle en verantwoorde jacht.",
            date: "2024-01-15"
        },
        {
            title: "Kruisboogschieten voor Kinderen",
            content: "Kruisboogschieten kan een geweldige activiteit zijn voor kinderen, mits het veilig en verantwoord wordt aangeleerd. In deze blogpost bespreken we hoe je kinderen op een leuke en veilige manier kunt introduceren in de wereld van het kruisboogschieten. Van het kiezen van de juiste uitrusting tot het aanleren van basisveiligheidsregels, deze gids helpt ouders en instructeurs om kinderen een positieve ervaring te geven.",
            date: "2002-01-15"
        },
        {
            title: "De Voordelen van Kruisboogschieten",
            content: "Kruisboogschieten biedt een breed scala aan fysieke en mentale voordelen. In deze blogpost verkennen we de vele voordelen van deze sport, zoals verbeterde coördinatie, focus, kracht en ontspanning. Ontdek hoe kruisboogschieten kan bijdragen aan een gezondere en meer gebalanceerde levensstijl.",
            date: "2024-01-15"
        },
        {
            title: "Kruisboog Schietbanen in Nederland",
            content: "Nederland heeft verschillende uitstekende schietbanen waar kruisboogschutters terecht kunnen. In deze blogpost geven we een overzicht van de beste locaties in Nederland om je kruisboogvaardigheden te oefenen. Van professionele schietbanen tot clubs en verenigingen, ontdek de beste plekken om te schieten in Nederland.",
            date: "2024-01-15"
        },
        {
            title: "Hoe Bereid je je Voor op een Kruisboog Wedstrijd?",
            content: "Een goede voorbereiding is essentieel voor succes in kruisboogwedstrijden. In deze blogpost bespreken we hoe je je optimaal kunt voorbereiden op een wedstrijd, van training en techniek tot mentale voorbereiding en uitrusting. Met deze tips ga je zelfverzekerd en goed voorbereid de competitie tegemoet.",
            date: "2024-01-15"
        }
    ];

    const filteredPosts = blogposts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort the filtered posts based on the selected sort order
    const sortedPosts = filteredPosts.sort((a, b) => {
        if (sortOrder === "oldest") {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <main className="flex flex-col">
            <section className="py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold">Blog</h1>
                <section className="flex gap-x-2">
                    <input
                        type="text"
                        className="input"
                        placeholder="Zoek..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                    <select
                        className="input "
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="newest" className="!text-body font-sans">Nieuwste eerst</option>
                        <option value="oldest" className="!text-body font-sans">Oudste eerst</option>
                    </select>
                </section>
            </section>

            <section className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
                {sortedPosts.map((post, index) => (
                    <BlogPost key={index} title={post.title} content={post.content} date={post.date} />
                ))}
            </section>
        </main>
    );
};

export default BlogFeed;