<template>
  <svg class="svg-container" >
  </svg>
</template>

<script>
    import * as d3 from 'd3';

    export default {
        name: 'zio-d3',
        data() {
            return {

            };
        },
        props: {
            cx: {
                type: Number,
                default() {
                    return {};
                },
            },
            cy: {
                type: Number,
                default() {
                    return {};
                },
            },
            r: {
                type: Number,
                default() {
                    return {};
                },
            },
            zioText: {
                type: String,
                default() {
                    return {};
                },
            },
            colors: {
                type: Object,
                default() {
                    return {};
                },
            },
            defaultColor: {
                type: String,
                default() {
                    return {};
                },
            },
        },
        methods: {
            drawCircle() {
                d3.select(this.$el).selectAll('circle, text').remove();
                d3.select(this.$el)
                    .append('circle')
                    .attr('cx', this.cx)
                    .attr('cy', this.cy)
                    .attr('r', this.r)
                    .style('stroke', '#000')
                    .style('stroke-width', '1px')
                    .style('fill', this.defaultColor);
                d3.select(this.$el)
                    .append('text')
                    .attr('class', 'zio__text')
                    .attr('x', this.cx)
                    .attr('y', this.cy)
                    .attr('text-anchor', 'middle')
                    .text(this.zioText);
                console.log(this.zioText);
            },
            getWindowWidth() {
                this.cx = document.documentElement.clientWidth / 2;
            },
        },
        computed: {

        },
        mounted() {
            this.drawCircle();
            this.$nextTick(() => {
                window.addEventListener('resize', () => {
                    this.drawCircle();
                    this.getWindowWidth();
                });
            });
        },
        beforeDestroy() {
            window.removeEventListener('resize', () => this.getWindowWidth);
        },
        watch: {
            zioText: 'drawCircle',
        },
    };
</script>

<style lang="scss" scoped>
  .svg-container {
    display: inline-block;
    position: relative;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 10%;
    vertical-align: middle;
    overflow: hidden;
    /*margin: auto;*/
  }
  .zio__text {
    width: 10%;
    max-width: 10%;
    display: block;
  }

</style>