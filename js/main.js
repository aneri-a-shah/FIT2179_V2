const charts = [
    {id: "#flow_map", spec: "vega/flow_map_outbound.vg.json"},
    {id: "#aud_scatter", spec: "vega/aud_scatter.vg.json"}
];

charts.forEach(({id, spec}) => {
    vegaEmbed(id, spec, {actions: true}).catch(err => console.error(`Failed to render ${spec}:`, err));
});