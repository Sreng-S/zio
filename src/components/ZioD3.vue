<template>
  <svg width="200" height="200"></svg>
</template>

<script>
    import * as d3 from 'd3';

    export default {
        name: 'zio-d3',
        props: {
            zioText: {
                type: String,
                default() {
                    return {};
                },
            },
        },
        methods: {
            drawCircle() {
                d3.select(this.$el)
                    .append('circle')
                    .attr('cx', '100')
                    .attr('cy', '100')
                    .attr('r', '100')
                    .style('stroke', '#000')
                    .style('stroke-width', '1px')
                    .style('fill', '#d0e1f3');
                d3.select(this.$el)
                    .append('text')
                    .attr('x', '50%')
                    .attr('y', '50%')
                    .attr('text-anchor', 'middle')
                    .text(this.zioText);
                console.log(this.zioText);
            },
        },
        mounted() {
            this.drawCircle();
        },
        watch: {
            zioText: 'drawCircle',
        },
    };
</script>

<style lang="scss" scoped>
  svg {
    padding: 1em;
  }

</style>