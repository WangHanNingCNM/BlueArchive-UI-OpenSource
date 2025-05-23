import pygame
import sys
import math

# 初始化Pygame
pygame.init()

# 设置窗口大小
width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Minecraft Style with Steve Skin Model Actions")

# 定义角色状态相关变量
current_action = "idle"  # 初始状态为空闲
action_timer = 0
# 定义不同动作对应的速度和动画周期等参数
action_speeds = {
    "idle": (0, 0),
    "walk": (2, 60),
    "sprint": (4, 30),
    "sleep": (0, 120)
}
# 定义颜色相关变量，用于模拟4D皮肤颜色变化
skin_color = (0, 255, 0)
angle = 0

# 定义史蒂夫身体、四肢等部分的位置和尺寸（简单示意）
body_rect = pygame.Rect(width // 2 - 30, height // 2 - 30, 60, 60)
leg_rect1 = pygame.Rect(width // 2 - 15, height // 2 + 30, 30, 60)
leg_rect2 = pygame.Rect(width // 2 + 15, height // 2 + 30, 30, 60)
arm_rect1 = pygame.Rect(width // 2 - 40, height // 2 - 10, 30, 60)
arm_rect2 = pygame.Rect(width // 2 + 10, height // 2 - 10, 30, 60)

clock = pygame.time.Clock()

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        # 根据按键来切换角色动作状态
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_w:
                current_action = "walk"
            elif event.key == pygame.K_LSHIFT:
                current_action = "sprint"
            elif event.key == pygame.K_s:
                current_action = "sleep"
        elif event.type == pygame.KEYUP:
            if event.key == pygame.K_w and current_action == "walk":
                current_action = "idle"
            elif event.key == pygame.K_LSHIFT and current_action == "sprint":
                current_action = "idle"
            elif event.key == pygame.K_s and current_action == "sleep":
                current_action = "idle"

    speed, cycle = action_speeds[current_action]
    action_timer += 1
    if action_timer >= cycle:
        action_timer = 0

    # 模拟4D皮肤的动态颜色变化（简单示例，改变RGB值）
    r = min(255, max(0, int(128 + 128 * math.sin(angle))))
    g = min(255, max(0, int(128 + 128 * math.cos(angle))))
    b = min(255, max(0, int(128 + 128 * math.sin(angle + math.pi / 2)))
    skin_color = (r, g, b)
    angle += 0.01

    # 根据不同动作调整身体各部分位置和姿态（简单示意）
    if current_action == "walk":
        body_rect.x += speed * math.sin(angle)
        body_rect.y += speed * math.cos(angle)
        leg_rect1.x += speed * math.sin(angle + math.pi / 3)
        leg_rect1.y += speed * math.cos(angle + math.pi / 3)
        leg_rect2.x += speed * math.sin(angle + 2 * math.pi / 3)
        leg_rect2.y += speed * math.cos(angle + 2 * math.pi / 3)
        arm_rect1.x += speed * math.sin(angle + 4 * math.pi / 3)
        arm_rect1.y += speed * math.cos(angle + 4 * math.pi / 3)
        arm_rect2.x += speed * math.sin(angle + 5 * math.pi / 3)
        arm_rect2.y += speed * math.cos(angle + 5 * math.pi / 3)
    elif current_action == "sprint":
        body_rect.x += 2 * speed * math.sin(angle)
        body_rect.y += 2 * speed * math.cos(angle)
        leg_rect1.x += 2 * speed * math.sin(angle + math.pi / 3)
        leg_rect1.y += 2 * speed * math.cos(angle + math.pi / 3)
        leg_rect2.x += 2 * speed * math.sin(angle + 2 * math.pi / 3)
        leg_rect2.y += 2 * speed * math.cos(angle + 2 * math.pi / 3)
        arm_rect1.x += 2 * speed * math.sin(angle + 4 * math.pi / 3)
        arm_rect1.y += 2 * speed * math.cos(angle + 4 * math.pi / 3)
        arm_rect2.x += 2 * speed * math.sin(angle + 5 * math.pi / 3)
        arm_rect2.y += 2 * speed * math.cos(angle + 5 * math.pi / 3)
    elif current_action == "sleep":
        body_rect.y += 10  # 简单模拟躺下睡觉的位置变化
        leg_rect1.x -= 10  # 调整腿部位置示意睡觉姿态
        leg_rect2.x += 10
        arm_rect1.x -= 10
        arm_rect2.x += 10

    screen.fill((0, 0, 0))

    # 绘制身体、四肢等部分（简单方块示意）
    pygame.draw.rect(screen, skin_color, body_rect)
    pygame.draw.rect(screen, skin_color, leg_rect1)
    pygame.draw.rect(screen, skin_color, leg_rect2)
    pygame.draw.rect(screen, skin_color, arm_rect1)
    pygame.draw.rect(screen, skin_color, arm_rect2)

    pygame.display.flip()
    clock.tick(60)
