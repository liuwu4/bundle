class Watch {
    private name(): number {
        console.log(' 测试');
        return 0;
    }

    example(): void {
        console.log("通过共有调用私有name", this.name());
    }
}
module.exports=[Watch];