import { onMount } from "svelte";
interface DragOptions {
  draggableClass?: string;
  dragAreaClass?: string;
  boundaryClass?: string;
}
interface DragOptions {
  draggableClass?: string;
  dragAreaClass?: string;
  boundaryClass?: string;
}
export default function useToolbarDrag({
  draggableClass = ".js-free-move",
  dragAreaClass = ".js-fastboard-wrap .fastboard-toolbar-contents",
  boundaryClass = ".js-fastboard-root",
}: DragOptions = {}) {
  function init() {
    // 获取需要拖动的元素和容器元素
    const draggable = document.querySelector(draggableClass)! as HTMLElement;
    const container = document.querySelector(dragAreaClass)! as HTMLElement;
    const boundary = document.querySelector(boundaryClass)! as HTMLElement;

    // 记录鼠标按下时的位置
    let dragStartX = 0;
    let dragStartY = 0;

    // 记录容器当前位置的偏移量
    let containerOffsetX = 0;
    let containerOffsetY = 0;

    // 记录最后一次移动时的鼠标位置
    let lastMouseX = 0;
    let lastMouseY = 0;

    // 鼠标按下时的事件处理函数
    const handleMouseDown = (event: MouseEvent) => {
      // 记录鼠标按下时的位置和最后一次移动时的位置
      dragStartX = event.clientX;
      dragStartY = event.clientY;
      lastMouseX = event.clientX;

      // 记录容器当前位置的偏移量
      const transformStyle = window.getComputedStyle(container).getPropertyValue("transform");

      const transformMatrix = new DOMMatrixReadOnly(transformStyle);
      console.log("transformMatrix", transformMatrix);
      containerOffsetX = transformMatrix.m41;
      containerOffsetY = transformMatrix.m42;

      // 绑定鼠标移动和松开事件
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    // 鼠标移动时的事件处理函数
    const handleMouseMove = (event: MouseEvent) => {
      // 计算当前位置与初始位置的差值
      const dragOffsetX = event.clientX - dragStartX;
      const dragOffsetY = event.clientY - dragStartY;

      // 记录最后一次移动时的鼠标位置
      lastMouseX = event.clientX;
      lastMouseY = event.clientY;

      // 计算容器应该移动到的位置
      const newContainerOffsetX = containerOffsetX + dragOffsetX;
      const newContainerOffsetY = containerOffsetY + dragOffsetY;

      if (newContainerOffsetY < 0) {
        return;
      }

      // 获取移动范围的边界坐标
      const boundaryRect = boundary.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const boundaryLeft = boundaryRect.left;
      const boundaryTop = boundaryRect.top;
      const boundaryRight = boundaryRect.right - containerRect.width;
      const boundaryBottom = boundaryRect.bottom - containerRect.height;

      // 如果容器在边界的左侧，且鼠标向左移动，则停止移动
      if (newContainerOffsetX <= boundaryLeft && event.clientX < lastMouseX) {
        container.style.transform = `translate(${boundaryLeft}px, ${newContainerOffsetY}px)`;
        // 如果容器在边界的右侧，且鼠标向右移动，则停止移动
      } else if (newContainerOffsetX >= boundaryRight && event.clientX > lastMouseX) {
        container.style.transform = `translate(${boundaryRight}px, ${newContainerOffsetY}px)`;
        // 如果容器在边界的上方，且鼠标向上移动，则停止移动
      } else if (newContainerOffsetY <= boundaryTop && event.clientY < lastMouseY) {
        container.style.transform = `translate(${newContainerOffsetX}px, ${boundaryTop}px)`;
        // 如果容器在边界的下方，且鼠标向下移动，则停止移动
      } else if (newContainerOffsetY >= boundaryBottom && event.clientY > lastMouseY) {
        container.style.transform = `translate(${newContainerOffsetX}px, ${boundaryBottom}px)`;
        // 否则，容器随着鼠标移动
      } else {
        container.style.transform = `translate(${newContainerOffsetX}px, ${newContainerOffsetY}px)`;
      }
    };

    // 鼠标松开时的事件处理函数
    const handleMouseUp = () => {
      // 解绑鼠标移动和松开事件
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // 绑定鼠标按下事件
    draggable.addEventListener("mousedown", handleMouseDown);
  }

  onMount(init);
}
