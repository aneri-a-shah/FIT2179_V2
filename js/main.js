const charts = [
    {id: "#flow_map", spec: "ega/flow_map_outbound.vg.json"}
];

charts.forEach(({id, spec}) => {
    vegaEmbed(id, spec, {actions: true}).catch(err => console.error('Failed to render ${spec}:', err));
});