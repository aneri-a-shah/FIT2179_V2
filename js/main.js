const charts = [
    {id: "#flow_map", spec: "vega/flow_map_outbound.vg.json"},
    {id: "#aud_scatter", spec: "vega/aud_scatter.vg.json"},
    {id: "#recovery_slope", spec: "vega/covid_slope.vg.json"},
    {id: "#recovery_bars", spec: "vega/covid_recovery.vg.json"},
    {id: "#domestic_dots", spec: "vega/domestic_dots.vg.json"},
    {id: "#domestic_choro", spec: "vega/domestic_choro.vg.json"},
    {id: "#state_multiples", spec: "vega/state_small_multiples.vg.json"}
];

charts.forEach(({id, spec}) => {
    vegaEmbed(id, spec, {actions: true}).catch(err => console.error(`Failed to render ${spec}:`, err));
});