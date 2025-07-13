# Git 版本更新指南

## 🔄 當前版本更新內容

### 主要更新項目：
- ✅ 完整 SEO 優化（Meta 標籤、Open Graph、結構化資料）
- ✅ 效能優化（資源預載入、影片優化、字體渲染）
- ✅ 無障礙功能增強（鍵盤導航、動畫偏好支援）
- ✅ JavaScript 功能擴充（錯誤處理、效能監控）
- ✅ 完整部署文件（README.md、DEPLOYMENT.md）
- ✅ 專案結構優化（.gitignore、robots.txt、sitemap.xml）

## 📋 Git 更新步驟

### 步驟 1: 檢查當前狀態
```bash
# 導航到專案目錄
cd E:\TraeProjects\Test_Site

# 檢查 Git 狀態
git status
```

### 步驟 2: 初始化 Git（如果尚未初始化）
```bash
# 初始化 Git repository
git init

# 設定預設分支名稱
git branch -M main
```

### 步驟 3: 添加所有檔案
```bash
# 添加所有新檔案和修改
git add .

# 檢查將要提交的檔案
git status
```

### 步驟 4: 提交變更
```bash
# 提交變更（詳細版本）
git commit -m "🚀 Major Update: 完整網站優化與發布準備

✨ 新增功能:
- 完整 SEO 優化套件（Meta 標籤、Open Graph、結構化資料）
- 影片背景優化與錯誤處理機制
- 無障礙功能支援（鍵盤導航、動畫偏好）
- 效能監控與載入時間追蹤
- 完整部署指南與文件

🔧 技術改進:
- 資源預載入優化
- 字體渲染品質提升
- JavaScript 錯誤處理機制
- 響應式設計增強

📁 檔案結構:
- 新增 sitemap.xml 網站地圖
- 新增 robots.txt 搜尋引擎指引
- 新增 .gitignore 版本控制設定
- 新增 README.md 專案說明
- 新增 DEPLOYMENT.md 部署指南

🎯 準備發布:
- GitHub Pages 部署就緒
- 所有 URL 模板已設定
- Google Analytics 程式碼已準備"
```

### 步驟 5: 連接到 GitHub Repository

#### 如果是新的 GitHub Repository：
```bash
# 添加遠端 repository（替換 yourusername 為您的 GitHub 用戶名）
git remote add origin https://github.com/yourusername/Test_Site.git

# 推送到 GitHub
git push -u origin main
```

#### 如果已經有 GitHub Repository：
```bash
# 推送更新
git push origin main
```

## 🏷️ 版本標籤建議

為了更好的版本管理，建議為重要更新添加標籤：

```bash
# 創建版本標籤
git tag -a v2.0.0 -m "完整網站優化與發布準備版本"

# 推送標籤到 GitHub
git push origin v2.0.0
```

## 📊 版本歷史記錄

### v2.0.0 (當前版本)
- 完整 SEO 優化套件
- 影片背景與效能優化
- 無障礙功能支援
- 完整部署文件
- 專案結構優化

### v1.0.0 (之前版本)
- 基本網站結構
- Hero 影片背景
- 響應式設計
- 基本 CSS 樣式

## 🔍 提交前檢查清單

在執行 Git 更新前，請確認：

- [ ] 所有檔案都已儲存
- [ ] 網站在本地預覽正常運作
- [ ] 沒有語法錯誤或拼寫錯誤
- [ ] 圖片和影片檔案路徑正確
- [ ] README.md 內容完整
- [ ] .gitignore 設定適當

## 🚨 注意事項

1. **大型檔案警告**：
   - 影片檔案較大，首次推送可能需要較長時間
   - 如果遇到檔案大小限制，考慮使用 Git LFS

2. **URL 更新提醒**：
   - 推送到 GitHub 後，記得更新所有檔案中的 URL
   - 將 `yourusername` 替換為實際的 GitHub 用戶名

3. **分支管理**：
   - 主要更新建議在 `main` 分支進行
   - 實驗性功能可以創建新分支

## 🔧 常見問題解決

### 問題 1: 推送被拒絕
```bash
# 如果遠端有更新，先拉取
git pull origin main --rebase

# 然後再推送
git push origin main
```

### 問題 2: 檔案太大
```bash
# 檢查大檔案
git ls-files --others --ignored --exclude-standard

# 如需要，設定 Git LFS
git lfs track "*.mp4"
git add .gitattributes
```

### 問題 3: 提交訊息修改
```bash
# 修改最後一次提交訊息
git commit --amend -m "新的提交訊息"
```

---

✅ **完成 Git 更新後，您的網站將準備好部署到 GitHub Pages！**

記得查看 `DEPLOYMENT.md` 檔案以了解完整的部署步驟。